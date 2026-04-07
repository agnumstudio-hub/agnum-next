import "dotenv/config";
import { execSync } from "node:child_process";

const databaseUrl = process.env.DATABASE_URL?.trim();

if (!databaseUrl || databaseUrl.includes("[YOUR-PASSWORD]")) {
  console.warn(
    "[prebuild-db] DATABASE_URL ausente/incompleta. Pulando prisma db push por enquanto."
  );
  process.exit(0);
}

execSync("npx prisma db push --schema=./prisma/schema.prisma", {
  stdio: "inherit",
});
