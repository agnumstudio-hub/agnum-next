import crypto from "crypto";
import type { NextApiRequest } from "next";

const COOKIE_NAME = "agnum_dashboard";

function getSecret() {
  // Recomendado: defina no .env um valor aleatório.
  return process.env.DASHBOARD_COOKIE_SECRET ?? process.env.DASHBOARD_PASSWORD ?? "dev-secret";
}

export function signSession(token: string) {
  const secret = getSecret();
  const sig = crypto.createHmac("sha256", secret).update(token).digest("hex");
  return `${token}.${sig}`;
}

export function verifySession(value?: string) {
  if (!value) return false;
  const [token, sig] = value.split(".");
  if (!token || !sig) return false;
  const expected = signSession(token);
  const a = Buffer.from(expected);
  const b = Buffer.from(value);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function getSessionFromReq(req: NextApiRequest) {
  return req.cookies[COOKIE_NAME];
}

export function ensureAuthedOrThrow(req: NextApiRequest) {
  const session = getSessionFromReq(req);
  if (!verifySession(session)) {
    const err: any = new Error("Unauthorized");
    err.statusCode = 401;
    throw err;
  }
}

export async function getAuthedFromReq(req: NextApiRequest) {
  const session = getSessionFromReq(req);
  return verifySession(session);
}

export function COOKIE_NAME_VALUE() {
  return COOKIE_NAME;
}

