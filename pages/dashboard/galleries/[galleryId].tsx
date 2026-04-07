import type { GetServerSideProps } from "next";
import { useMemo, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import { getAuthedFromReq } from "../../../lib/dashboardAuth";
import { getGalleryById } from "../../../lib/supabaseServer";

type Img = { id: number; src: string; alt: string | null; sortOrder: number };

export default function GalleryEdit({
  galleryId,
  galleryKey,
  initialImages,
}: {
  galleryId: number;
  galleryKey: string;
  initialImages: Img[];
}) {
  const [images, setImages] = useState<Img[]>(initialImages);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputId = useMemo(() => `upload_${galleryId}`, [galleryId]);

  async function reorder(next: Img[]) {
    const normalized = next.map((img, idx) => ({ ...img, sortOrder: idx }));
    setImages(normalized);
    await fetch(`/api/dashboard/galleries/${galleryId}/images/reorder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        images: normalized.map((img) => ({ id: img.id, sortOrder: img.sortOrder })),
      }),
    });
  }

  async function move(idx: number, dir: -1 | 1) {
    const to = idx + dir;
    if (to < 0 || to >= images.length) return;

    const next = [...images];
    const tmp = next[idx];
    next[idx] = next[to];
    next[to] = tmp;
    await reorder(next);
  }

  async function del(id: number) {
    setError(null);
    await fetch(`/api/dashboard/galleries/${galleryId}/images/${id}`, {
      method: "DELETE",
    });
    const next = images.filter((img) => img.id !== id);
    await reorder(next);
  }

  async function upload(files: FileList | null) {
    if (!files || files.length === 0) return;
    setError(null);
    setUploading(true);
    try {
      const fd = new FormData();
      Array.from(files).forEach((f) => fd.append("files", f));

      const res = await fetch(`/api/dashboard/galleries/${galleryId}/images`, {
        method: "POST",
        body: fd,
      });

      if (!res.ok) throw new Error("Upload failed");
      // Recarrega a lista completa após upload (evita “perder” imagens pré-existentes).
      const res2 = await fetch(`/api/dashboard/galleries/${galleryId}/images`);
      const data2 = await res2.json();
      setImages(data2.images as Img[]);
    } catch (e: any) {
      setError("Falha no upload");
    } finally {
      setUploading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="dashboard-title">{galleryKey}</div>

      <div className="dashboard-form-row">
        <input
          id={fileInputId}
          type="file"
          multiple
          onChange={(e) => upload(e.target.files)}
          disabled={uploading}
        />
      </div>

      {error ? <p style={{ color: "#b3261e" }}>{error}</p> : null}

      <div style={{ marginTop: 22 }}>
        {images.map((img, idx) => (
          <div key={img.id} className="dashboard-row">
            <img
              className="dashboard-img"
              src={`/images/${img.src}`}
              alt={img.alt ?? img.src}
            />
            <div className="dashboard-img-meta">
              <div className="dashboard-img-name">{img.src}</div>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
                sortOrder: {img.sortOrder}
              </div>
            </div>
            <div className="dashboard-controls">
              <button
                className="dashboard-small-btn secondary"
                onClick={() => move(idx, -1)}
                disabled={idx === 0}
                type="button"
              >
                Up
              </button>
              <button
                className="dashboard-small-btn secondary"
                onClick={() => move(idx, 1)}
                disabled={idx === images.length - 1}
                type="button"
              >
                Down
              </button>
              <button
                className="dashboard-small-btn danger"
                onClick={() => del(img.id)}
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const authed = await getAuthedFromReq(ctx.req as any);
  if (!authed) {
    return { redirect: { destination: "/dashboard/login", permanent: false } };
  }

  const galleryIdRaw = ctx.query.galleryId;
  const galleryId = Array.isArray(galleryIdRaw)
    ? Number(galleryIdRaw[0])
    : Number(galleryIdRaw);

  if (!Number.isFinite(galleryId)) {
    return { notFound: true };
  }

  const gallery = await getGalleryById(galleryId);

  if (!gallery) return { notFound: true };

  return {
    props: {
      galleryId,
      galleryKey: gallery.key,
      initialImages: gallery.images as Img[],
    },
  };
};

