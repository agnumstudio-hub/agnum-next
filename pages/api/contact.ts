import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().optional().or(z.literal("")),
  email: z.string().email(),
  message: z.string().min(1),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  // Neste momento, enviamos para o console (você pode trocar por e-mail/CRM depois).
  // eslint-disable-next-line no-console
  console.log("[contact]", parsed.data);

  return res.status(200).json({ ok: true });
}

