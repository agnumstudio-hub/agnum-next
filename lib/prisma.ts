import { PrismaPg } from "@prisma/adapter-pg";
// Next.js pode resolver caminhos relativos de um jeito diferente no build (ex: prefixo virtual `src/`).
// Usamos o alias do tsconfig para apontar sempre para a pasta raiz `.prisma/`.
import { PrismaClient } from "@/.prisma/client/client";

declare global {
  // eslint-disable-next-line no-var
  var __agnum_prisma: PrismaClient | undefined;
}

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl || databaseUrl.includes("[YOUR-PASSWORD]")) {
  throw new Error(
    "DATABASE_URL inválido para Postgres/Supabase. Configure a senha real no ambiente."
  );
}

const prisma =
  globalThis.__agnum_prisma ??
  new PrismaClient({
    adapter: new PrismaPg({ connectionString: databaseUrl }),
  });

// Evita criar múltiplas conexões durante hot-reload em dev.
if (process.env.NODE_ENV !== "production") {
  globalThis.__agnum_prisma = prisma;
}

export { prisma };

