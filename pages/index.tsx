import type { GetServerSideProps } from "next";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

import PublicLayout from "../components/PublicLayout";
import { getGalleriesByKeys } from "../lib/gallery";
import { getT, renderMultiline } from "../lib/translations";

type ImageRow = { src: string; alt: string | null };

function byKey(map: Record<string, ImageRow[]>, key: string) {
  return map[key] ?? [];
}

function HeroTitle({ title }: { title: string }) {
  return (
    <h1 className="hero-title">
      {renderMultiline(title)}
    </h1>
  );
}

export default function HomePage({
  locale,
  galleries,
}: {
  locale: string;
  galleries: Record<string, ImageRow[]>;
}) {
  const t = getT(locale);
  const heroRef = useRef<HTMLElement | null>(null);
  const manifestoRef = useRef<HTMLElement | null>(null);

  // Mapeamento de imagens
  const hero = byKey(galleries, "home.hero")[0];
  const perspective = byKey(galleries, "home.perspective").slice(0, 4);
  const manifesto = byKey(galleries, "home.manifesto")[0];
  const aboutImg = byKey(galleries, "home.about")[0];

  // Efeitos de Scroll (Motion)
  const { scrollYProgress } = useScroll({
    target: manifestoRef,
    offset: ["start end", "end start"],
  });
  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [-80, 80]), {
    stiffness: 80, damping: 22, mass: 0.5,
  });
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [38, -38]), {
    stiffness: 95, damping: 24, mass: 0.45,
  });

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useSpring(useTransform(heroScrollProgress, [0, 1], [0, -22]), { 
    stiffness: 90, damping: 24, mass: 0.55 
  });
  const heroImageScale = useSpring(useTransform(heroScrollProgress, [0, 1], [1, 1.025]), { 
    stiffness: 90, damping: 24, mass: 0.55 
  });
  const heroTextY = useSpring(useTransform(heroScrollProgress, [0, 1], [0, -12]), { 
    stiffness: 100, damping: 28, mass: 0.5 
  });
  const heroTextOpacity = useSpring(useTransform(heroScrollProgress, [0, 1], [1, 0.76]), { 
    stiffness: 110, damping: 30, mass: 0.5 
  });

  return (
    <PublicLayout locale={locale}>
      <main>
        {/* HERO SECTION */}
        <section ref={heroRef} className="hero-section">
          <div className="container hero-section-inner">
            <motion.div
              className="hero-title"
              style={{ y: heroTextY, opacity: heroTextOpacity }}
            >
              <HeroTitle title={t.home.heroTitle} />
            </motion.div>
            <motion.img
              src={`/images/${hero?.src ?? "HOME1.jpg"}`}
              className="hero-main-img"
              alt={hero?.alt ?? t.metadata.title}
              style={{ y: heroImageY, scale: heroImageScale }}
            />
            <motion.div
              className="hero-text"
              style={{ y: heroTextY, opacity: heroTextOpacity }}
            >
              {t.home.heroText}
            </motion.div>
          </div>
        </section>

        {/* POSICIONAMENTO */}
        <section className="posicionamento">
          <div className="container posicionamento-inner">
            <div className="pos-label">{t.home.positionLabel}</div>
            <div className="pos-text">{renderMultiline(t.home.positionText)}</div>
            <div className="pos-label">{t.home.positionFooterLabel}</div>
          </div>
        </section>

        {/* PERSPECTIVE / PORTFOLIO PREVIEW */}
        <section className="perspective-section">
          <div className="container perspective-section-inner">
            
            {/* Reveal no Título e Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="p-title">{t.home.perspectiveTitle}</div>
              <p style={{ fontSize: 18, marginTop: 36 }}>{t.home.perspectiveIntro}</p>
            </motion.div>

            {/* Grid de Imagens com Reveal Sincronizado + Hover de Zoom */}
            <div className="p-grid">
              {perspective.map((img) => (
                <motion.img
                  key={img.src}
                  src={`/images/${img.src}`}
                  alt={img.alt ?? "Boutique Hotel Design"}
                  // --- Reveal Animation (Entrada ao rolar a página) ---
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
        
        {/* MANIFESTO SECTION */}
        <section
          ref={manifestoRef}
          className="manifesto-section experience-section"
        >
          <motion.img
            src={`/images/${manifesto?.src ?? "HOME6.jpg"}`}
            alt={manifesto?.alt ?? "Luxury Hospitality Aesthetics"}
            className="manifesto-bg-image"
            style={{ y: bgY }}
          />
          <div className="manifesto-overlay" />
          <div className="container manifesto-section-inner">
            <motion.div className="manifesto-text experience-text" style={{ y: textY }}>
              <h2>{t.home.manifestoTitle}</h2>
              <p>{renderMultiline(t.home.manifestoText)}</p>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section">
          <div className="container about-section-inner">
            <div className="about-content">
              <div className="about-header">
                <h2>{t.home.aboutTitle}</h2>
                <p>{renderMultiline(t.home.aboutText)}</p>
              </div>
              <Link href="/studio" locale={locale} className="underline">
                {t.home.aboutUnderline}
              </Link>
            </div>
            <img
              src={`/images/${aboutImg?.src ?? "HOME7.jpg"}`}
              className="about-img"
              alt={aboutImg?.alt ?? "AGNUM Creative Studio"}
            />
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="contact-section">
          <div className="container contact-section-inner">
            <div className="contact-text">{renderMultiline(t.home.contactText)}</div>
            <Link href="/contact" locale={locale} className="underline-dark">
              {t.home.contactUnderline}
            </Link>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = ctx.locale ?? "pt";

  const keys = [
    "home.hero",
    "home.perspective",
    "home.manifesto",
    "home.about",
  ];

  const rows = await getGalleriesByKeys(keys);
  const galleries: Record<string, ImageRow[]> = {};
  for (const g of rows) {
    galleries[g.key] = (g.images as any) as ImageRow[];
  }

  return {
    props: {
      locale,
      galleries,
    },
  };
};
