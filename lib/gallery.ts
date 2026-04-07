import { getGalleriesByKeys as getByKeys } from "./supabaseServer";

export async function getGalleriesByKeys(keys: string[]) {
  return getByKeys(keys);
}

export async function getGalleryByKey(key: string) {
  const list = await getByKeys([key]);
  return list[0] ?? null;
}

