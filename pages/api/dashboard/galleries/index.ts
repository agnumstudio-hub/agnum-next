import type { NextApiRequest, NextApiResponse } from "next";
import {
  createGallery,
  listDashboardGalleries,
} from "../../../../lib/supabaseServer";
import { ensureAuthedOrThrow } from "../../../../lib/dashboardAuth";
import { z } from "zod";

const createSchema = z.object({
  key: z.string().min(2).max(80),
  title: z.string().min(1).max(120).optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    ensureAuthedOrThrow(req);
  } catch (e: any) {
    return res.status(e.statusCode ?? 401).json({ error: "Unauthorized" });
  }

  if (req.method === "GET") {
    const galleries = await listDashboardGalleries();

    return res.status(200).json({
      galleries,
    });
  }

  if (req.method === "POST") {
    const parsed = createSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    try {
      const created = await createGallery({
        key: parsed.data.key,
        title: parsed.data.title,
      });
      return res.status(201).json({ gallery: created });
    } catch (err: any) {
      // Unique constraint
      return res.status(409).json({ error: "Key already exists" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}

