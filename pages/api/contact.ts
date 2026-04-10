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

  try {
    // Aqui fazemos a ponte entre seu site e o Formspree
    const response = await fetch("https://formspree.io/f/xgopjjrg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(parsed.data),
    });

    if (response.ok) {
      return res.status(200).json({ ok: true });
    } else {
      return res.status(500).json({ error: "Failed to send message via Formspree" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
