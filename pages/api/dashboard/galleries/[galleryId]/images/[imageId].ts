import type { NextApiRequest, NextApiResponse } from "next";
import { deleteGalleryImage } from "../../../../../../lib/supabaseServer";
import { ensureAuthedOrThrow } from "../../../../../../lib/dashboardAuth";

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
  const imageId = parseIntOrNull(req.query.imageId);

  if (!galleryId || !imageId) {
    return res.status(400).json({ error: "Invalid ids" });
  }

  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const deleted = await deleteGalleryImage(galleryId, imageId);

  return res.status(200).json({
    ok: true,
    deleted,
  });
}

