// Prisma Client gerado pelo `prisma generate`.
import { PrismaPg } from "@prisma/adapter-pg";
// Usamos alias do tsconfig para apontar sempre para a pasta raiz `.prisma/`.
import { PrismaClient } from "@/.prisma/client/client";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl || databaseUrl.includes("[YOUR-PASSWORD]")) {
  throw new Error("DATABASE_URL inválido. Configure a senha real do Supabase.");
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({ adapter });

type SeedImage = { src: string; alt?: string | null; sortOrder?: number };
type SeedGallery = { key: string; title?: string; images: SeedImage[] };

const seedGalleries: SeedGallery[] = [
  {
    key: "home.hero",
    title: "Home hero",
    images: [{ src: "HOME1.jpg", alt: "Hero image" }],
  },
  {
    key: "home.perspective",
    title: "Home perspective grid",
    images: [
      { src: "HOME2.jpg", alt: "Work 1" },
      { src: "HOME3.jpg", alt: "Work 2" },
      { src: "HOME4.jpg", alt: "Work 3" },
      { src: "HOME5.jpg", alt: "Work 4" },
    ],
  },
  {
    key: "home.manifesto",
    title: "Home manifesto background",
    images: [{ src: "HOME6.jpg", alt: "Manifesto background" }],
  },
  {
    key: "home.about",
    title: "Home about image",
    images: [{ src: "HOME7.jpg", alt: "About image" }],
  },
  {
    key: "studio.hero",
    title: "Studio hero background",
    images: [{ src: "THESTUDIO1.jpg", alt: "Studio hero" }],
  },
  {
    key: "studio.editorialBreak",
    title: "Studio editorial break image",
    images: [{ src: "THESTUDIO2.jpg", alt: "Editorial background" }],
  },
  {
    key: "portfolio.frame1.left",
    title: "Portfolio frame 1 - left mosaic",
    images: [
      { src: "PORTFOLIO1.jpg", alt: "Portfolio 1" },
      { src: "PORTFOLIO2.jpg", alt: "Portfolio 2" },
      { src: "PORTFOLIO3.jpg", alt: "Portfolio 3" },
      { src: "PORTFOLIO4.jpg", alt: "Portfolio 4" },
    ],
  },
  {
    key: "portfolio.frame1.right",
    title: "Portfolio frame 1 - right mosaic",
    images: [{ src: "PORTFOLIO5.jpg", alt: "Portfolio 5" }],
  },
  {
    key: "portfolio.frame1.single",
    title: "Portfolio frame 1 - centered image",
    images: [{ src: "PORTFOLIO6.jpg", alt: "Portfolio 6" }],
  },
  {
    key: "portfolio.frame1.row",
    title: "Portfolio frame 1 - horizontal row",
    images: [
      { src: "PORTFOLIO7.jpg", alt: "Portfolio 7" },
      { src: "PORTFOLIO8.jpg", alt: "Portfolio 8" },
      { src: "PORTFOLIO9.jpg", alt: "Portfolio 9" },
    ],
  },
  {
    key: "portfolio.frame2.left",
    title: "Portfolio frame 2 - left column",
    images: [
      { src: "PORTFOLIO10.jpg", alt: "Portfolio 10" },
      { src: "PORTFOLIO11.jpg", alt: "Portfolio 11" },
      { src: "PORTFOLIO14.jpg", alt: "Portfolio 14" },
      { src: "PORTFOLIO16.jpg", alt: "Portfolio 16" },
    ],
  },
  {
    key: "portfolio.frame2.right",
    title: "Portfolio frame 2 - right column",
    images: [
      { src: "PORTFOLIO12.jpg", alt: "Portfolio 12" },
      { src: "PORTFOLIO13.jpg", alt: "Portfolio 13" },
      { src: "PORTFOLIO18.jpg", alt: "Portfolio 18" },
      { src: "PORTFOLIO17.jpg", alt: "Portfolio 17" },
    ],
  },
  {
    key: "portfolio.separator",
    title: "Portfolio separator image",
    images: [{ src: "PORTFOLIO15.jpg", alt: "Portfolio 15" }],
  },
  {
    key: "portfolio.frame3.row",
    title: "Portfolio frame 3 - horizontal row",
    images: [
      { src: "PORTFOLIO21.jpg", alt: "Portfolio 21" },
      { src: "PORTFOLIO20.jpg", alt: "Portfolio 20" },
      { src: "PORTFOLIO19.jpg", alt: "Portfolio 19" },
    ],
  },
  {
    key: "portfolio.frame4.quad",
    title: "Portfolio frame 4 - final grid quad",
    images: [
      { src: "PORTFOLIO22.jpg", alt: "Portfolio 22" },
      { src: "PORTFOLIO24.jpg", alt: "Portfolio 24" },
      { src: "PORTFOLIO25.jpg", alt: "Portfolio 25" },
      { src: "PORTFOLIO23.jpg", alt: "Portfolio 23" },
    ],
  },
];

async function main() {
  const galleryCount = await prisma.gallery.count();
  if (galleryCount > 0) {
    // Evita sobreescrever edições feitas no dashboard.
    return;
  }

  await prisma.galleryImage.deleteMany({});
  await prisma.gallery.deleteMany({});

  for (const gallery of seedGalleries) {
    const createdGallery = await prisma.gallery.create({
      data: {
        key: gallery.key,
        title: gallery.title,
      },
    });

    await prisma.galleryImage.createMany({
      data: gallery.images.map((img, idx) => ({
        galleryId: createdGallery.id,
        src: img.src,
        alt: img.alt ?? null,
        sortOrder: img.sortOrder ?? idx,
      })),
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

