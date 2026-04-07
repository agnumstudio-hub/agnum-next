import type { NextApiRequest, NextApiResponse } from "next";
import {
  deleteGallery,
  updateGallery,
} from "../../../../lib/supabaseServer";
import { ensureAuthedOrThrow } from "../../../../lib/dashboardAuth";
import { z } from "zod";

const updateSchema = z.object({
  title: z.string().min(1).max(120).optional(),
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

  if (req.method === "DELETE") {
    await deleteGallery(galleryId);
    return res.status(200).json({ ok: true });
  }

  if (req.method === "PUT") {
    const parsed = updateSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: "Invalid payload" });

    const updated = await updateGallery(galleryId, {
      title: parsed.data.title,
    });
    return res.status(200).json({ gallery: updated });
  }

  return res.status(405).json({ error: "Method not allowed" });
}

