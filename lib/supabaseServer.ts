import { createClient } from "@supabase/supabase-js";

type GalleryRow = {
  id: number;
  key: string;
  title: string | null;
  description: string | null;
};

type GalleryImageRow = {
  id: number;
  galleryId: number;
  src: string;
  alt: string | null;
  sortOrder: number;
};

function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const publishable = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const key = serviceRole ?? publishable;

  if (!url || !key) {
    throw new Error(
      "Supabase env ausente. Configure NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY (ou NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)."
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function getGalleriesByKeys(keys: string[]) {
  if (keys.length === 0) return [];
  const supabase = getSupabaseServerClient();
  const uniqueKeys = Array.from(new Set(keys));

  const { data: galleries, error: gErr } = await supabase
    .from("Gallery")
    .select("id,key,title,description")
    .in("key", uniqueKeys);
  if (gErr) throw gErr;

  const ids = (galleries ?? []).map((g) => g.id);
  let images: GalleryImageRow[] = [];
  if (ids.length > 0) {
    const { data: imgRows, error: iErr } = await supabase
      .from("GalleryImage")
      .select("id,galleryId,src,alt,sortOrder")
      .in("galleryId", ids)
      .order("sortOrder", { ascending: true });
    if (iErr) throw iErr;
    images = (imgRows ?? []) as GalleryImageRow[];
  }

  const imageMap = new Map<number, GalleryImageRow[]>();
  for (const img of images) {
    const list = imageMap.get(img.galleryId) ?? [];
    list.push(img);
    imageMap.set(img.galleryId, list);
  }

  return ((galleries ?? []) as GalleryRow[]).map((g) => ({
    ...g,
    images: imageMap.get(g.id) ?? [],
  }));
}

export async function listDashboardGalleries() {
  const supabase = getSupabaseServerClient();
  const { data: galleries, error: gErr } = await supabase
    .from("Gallery")
    .select("id,key,title")
    .order("id", { ascending: false });
  if (gErr) throw gErr;

  const ids = (galleries ?? []).map((g) => g.id);
  let images: GalleryImageRow[] = [];
  if (ids.length > 0) {
    const { data: imgRows, error: iErr } = await supabase
      .from("GalleryImage")
      .select("galleryId,src,sortOrder")
      .in("galleryId", ids)
      .order("sortOrder", { ascending: true });
    if (iErr) throw iErr;
    images = (imgRows ?? []) as GalleryImageRow[];
  }

  const coverMap = new Map<number, string>();
  for (const img of images) {
    if (!coverMap.has(img.galleryId)) coverMap.set(img.galleryId, img.src);
  }

  return (galleries ?? []).map((g) => ({
    id: g.id,
    key: g.key,
    title: g.title,
    cover: coverMap.get(g.id) ?? null,
  }));
}

export async function createGallery(input: { key: string; title?: string }) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("Gallery")
    .insert({ key: input.key, title: input.title ?? null })
    .select("id,key,title,description")
    .single();
  if (error) throw error;
  return data;
}

export async function updateGallery(galleryId: number, input: { title?: string }) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("Gallery")
    .update({ title: input.title ?? null })
    .eq("id", galleryId)
    .select("id,key,title,description")
    .single();
  if (error) throw error;
  return data;
}

export async function deleteGallery(galleryId: number) {
  const supabase = getSupabaseServerClient();
  const { error: iErr } = await supabase.from("GalleryImage").delete().eq("galleryId", galleryId);
  if (iErr) throw iErr;
  const { error: gErr } = await supabase.from("Gallery").delete().eq("id", galleryId);
  if (gErr) throw gErr;
}

export async function getGalleryById(galleryId: number) {
  const supabase = getSupabaseServerClient();
  const { data: gallery, error: gErr } = await supabase
    .from("Gallery")
    .select("id,key,title,description")
    .eq("id", galleryId)
    .maybeSingle();
  if (gErr) throw gErr;
  if (!gallery) return null;

  const { data: images, error: iErr } = await supabase
    .from("GalleryImage")
    .select("id,src,alt,sortOrder")
    .eq("galleryId", galleryId)
    .order("sortOrder", { ascending: true });
  if (iErr) throw iErr;

  return { ...gallery, images: images ?? [] };
}

export async function listGalleryImages(galleryId: number) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("GalleryImage")
    .select("id,src,alt,sortOrder")
    .eq("galleryId", galleryId)
    .order("sortOrder", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export async function createGalleryImage(input: {
  galleryId: number;
  src: string;
  alt: string | null;
  sortOrder: number;
}) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("GalleryImage")
    .insert(input)
    .select("id,src,alt,sortOrder")
    .single();
  if (error) throw error;
  return data;
}

export async function getMaxSortOrder(galleryId: number) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("GalleryImage")
    .select("sortOrder")
    .eq("galleryId", galleryId)
    .order("sortOrder", { ascending: false })
    .limit(1);
  if (error) throw error;
  return data?.[0]?.sortOrder ?? -1;
}

export async function deleteGalleryImage(galleryId: number, imageId: number) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("GalleryImage")
    .delete()
    .eq("id", imageId)
    .eq("galleryId", galleryId)
    .select("id");
  if (error) throw error;
  return data?.length ?? 0;
}

export async function reorderGalleryImages(
  galleryId: number,
  ordered: Array<{ id: number; sortOrder: number }>
) {
  const supabase = getSupabaseServerClient();
  for (let idx = 0; idx < ordered.length; idx += 1) {
    const img = ordered[idx];
    const { error } = await supabase
      .from("GalleryImage")
      .update({ sortOrder: -(idx + 1) })
      .eq("id", img.id)
      .eq("galleryId", galleryId);
    if (error) throw error;
  }
  for (let idx = 0; idx < ordered.length; idx += 1) {
    const img = ordered[idx];
    const { error } = await supabase
      .from("GalleryImage")
      .update({ sortOrder: idx })
      .eq("id", img.id)
      .eq("galleryId", galleryId);
    if (error) throw error;
  }
}
