import type { NextApiRequest, NextApiResponse } from "next";
import { reorderGalleryImages } from "../../../../../../lib/supabaseServer";
import { ensureAuthedOrThrow } from "../../../../../../lib/dashboardAuth";
import { z } from "zod";

const bodySchema = z.object({
  images: z
    .array(
      z.object({
        id: z.number(),
        sortOrder: z.number(),
      })
    )
    .min(1),
});

function parseIntOrNull(value: unknown) {
  const raw = Array.isArray(value) ? value[0] : value;
  const id = Number(raw);
  return Number.isFinite(id) ? id : null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    ensureAuthedOrThrow(req);
  } catch (e: any) {
    return res.status(e.statusCode ?? 401).json({ error: "Unauthorized" });
  }

  const galleryId = parseIntOrNull(req.query.galleryId);
  if (!galleryId) return res.status(400).json({ error: "Invalid galleryId" });

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const parsed = bodySchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  const ordered = parsed.data.images;

  await reorderGalleryImages(galleryId, ordered);

  return res.status(200).json({ ok: true });
}

