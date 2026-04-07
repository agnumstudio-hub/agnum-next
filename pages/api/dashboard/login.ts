import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { signSession } from "../../../lib/dashboardAuth";
import { z } from "zod";

const bodySchema = z.object({
  password: z.string().min(1),
});

function setCookie(res: NextApiResponse, cookie: string, maxAgeSeconds: number) {
  const secret = process.env.NODE_ENV === "production";
  const secureFlag = secret ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `${cookie}; Path=/; HttpOnly; Max-Age=${maxAgeSeconds}; SameSite=Lax${secureFlag}`
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const parsed = bodySchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  const expected = process.env.DASHBOARD_PASSWORD;
  if (!expected) {
    if (process.env.NODE_ENV !== "production") {
      // Dev fallback: para não travar o fluxo inicial.
      if (parsed.data.password !== "dev") {
        return res.status(401).json({ error: "Unauthorized" });
      }
    } else {
      return res.status(500).json({ error: "DASHBOARD_PASSWORD missing" });
    }
  } else if (parsed.data.password !== expected) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = crypto.randomBytes(32).toString("hex");
  const signed = signSession(token);

  setCookie(res, `agnum_dashboard=${signed}`, 60 * 60 * 24 * 7);

  return res.status(200).json({ ok: true });
}

