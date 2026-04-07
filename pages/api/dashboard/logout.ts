import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secureFlag = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `agnum_dashboard=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax${secureFlag}`
  );
  return res.status(200).json({ ok: true });
}

