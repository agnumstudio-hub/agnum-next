import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "node:fs/promises";
import path from "node:path";
import {
  createGalleryImage,
  getMaxSortOrder,
  listGalleryImages,
} from "../../../../../../lib/supabaseServer";
import { ensureAuthedOrThrow } from "../../../../../../lib/dashboardAuth";

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseGalleryId(value: unknown) {
  const raw = Array.isArray(value) ? value[0] : value;
  const id = Number(raw);
  return Number.isFinite(id) ? id : null;
}

async function parseMultipart(req: NextApiRequest) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
    maxFileSize: 15 * 1024 * 1024, // 15MB por arquivo (ajustável)
  });

  const [fields, files] = await form.parse(req);
  return { fields, files } as const;
}

function normalizeFiles(files: any) {
  // Esperamos `files[]` ou `file`.
  const direct = files?.files ?? files?.file ?? null;
  const firstKey = direct ? null : Object.keys(files ?? {})[0];
  const candidate = direct ?? (firstKey ? (files as any)[firstKey] : null);
  if (!candidate) return [];
  const list = Array.isArray(candidate) ? candidate : [candidate];
  return list.filter(Boolean);
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

  const galleryId = parseGalleryId(req.query.galleryId);
  if (!galleryId) {
    return res.status(400).json({ error: "Invalid galleryId" });
  }

  if (req.method === "GET") {
    const images = await listGalleryImages(galleryId);
    return res.status(200).json({ images });
  }

  if (req.method === "POST") {
    const { files } = await parseMultipart(req);
    const list = normalizeFiles(files);
    if (list.length === 0) {
      return res.status(400).json({ error: "No files provided" });
    }

    const uploadsDir = path.join(process.cwd(), "public", "images", "uploads");
    await fs.mkdir(uploadsDir, { recursive: true });

    let nextSort = (await getMaxSortOrder(galleryId)) + 1;

    const created: Array<{ id: number; src: string; alt: string | null; sortOrder: number }> = [];

    for (const file of list) {
      const filePath = (file as any).filepath as string;
      const originalName = (file as any).originalFilename as string | undefined;
      const ext = path.extname(originalName ?? (file as any).newFilename ?? "");
      const safeExt = ext || path.extname(filePath) || ".jpg";

      const filename = `${Date.now()}_${Math.random().toString(16).slice(2)}${safeExt}`;
      const dest = path.join(uploadsDir, filename);
      await fs.copyFile(filePath, dest);

      const src = `uploads/${filename}`;
      const sortOrder = nextSort++;

      const record = await createGalleryImage({
        galleryId,
        src,
        alt: originalName ? originalName : null,
        sortOrder,
      });

      created.push({
        id: record.id,
        src: record.src,
        alt: record.alt,
        sortOrder: record.sortOrder,
      });
    }

    return res.status(201).json({ images: created });
  }

  return res.status(405).json({ error: "Method not allowed" });
}

