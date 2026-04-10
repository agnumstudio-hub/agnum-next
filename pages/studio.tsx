import type { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";
import PublicLayout from "../components/PublicLayout";
import { getGalleriesByKeys } from "../lib/gallery";
import { getT, renderMultiline } from "../lib/translations";

type ImageRow = { src: string; alt: string | null };

function byKey(map: Record<string, ImageRow[]>, key: string) {
  return map[key] ?? [];
}

export default function StudioPage({
  locale,
  galleries,
}: {
  locale: string;
  galleries: Record<string, ImageRow[]>;
}) {
  const t = getT(locale) as any;
  const [openBulletId, setOpenBulletId] = useState<string | null>(null);

  const hero = byKey(galleries, "studio.hero")[0];
  const editorialBreak = byKey(galleries, "studio.editorialBreak")[0];

  return (
   <PublicLayout locale={locale} pageTitle="The Studio">
      <main>
        <section
          className="studio-hero"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(31, 28, 26, 0) 0%, rgba(31, 28, 26, 0.7) 100%), url('/images/${hero?.src ?? "THESTUDIO1.jpg"
              }')`,
          }}
        >
          <div className="container studio-hero-inner">
            <h1>{t.studio.heroTitle}</h1>
            <div className="studio-hero-mobile-stack">
              <p className="studio-hero-mobile-text">{t.studio.heroTitle}</p>
              <img
                src={`/images/${hero?.src ?? "THESTUDIO1.jpg"}`}
                alt={t.studio.heroTitle}
                className="studio-hero-mobile-image"
              />
              <p className="studio-hero-mobile-text">{t.studio.heroTitle}</p>
            </div>
          </div>
        </section>

        <section className="container studio-intro">
          <div className="intro-wrap">
            {t.studio.intro.lead}
            <br />
            <br />
            <strong>{renderMultiline(t.studio.intro.strong)}</strong>
            <br />
            <br />
            {t.studio.intro.body}
          </div>
        </section>

        <section className="container editorial-section">
          <div className="studio-divider-line" />

          <div className="grid-row">
            <div className="label-col">{t.studio.editorial.observationLabel}</div>
            <div className="content-col">
              {t.studio.editorial.observationBody}
            </div>
          </div>

          <div className="grid-row">
            <div className="label-col">{t.studio.editorial.intentionLabel}</div>
            <div className="content-col">
              {t.studio.editorial.intentionBody}
            </div>
          </div>

          <div className="grid-row">
            <div className="label-col">{t.studio.editorial.restraintLabel}</div>
            <div className="content-col">
              {t.studio.editorial.restraintBody}
            </div>
          </div>

          <div className="grid-row" style={{ marginBottom: 0 }}>
            <div className="label-col">{t.studio.editorial.continuityLabel}</div>
            <div className="content-col">
              {t.studio.editorial.continuityBody}
            </div>
          </div>
        </section>

        <section className="image-break">
          <img
            src={`/images/${editorialBreak?.src ?? "THESTUDIO2.jpg"}`}
            alt="Editorial Background"
          />
          <div className="container image-break-inner">
            <div className="image-overlay-text">
              {renderMultiline(t.studio.editorialBreakText)}
            </div>
          </div>
        </section>

        <section className="dark-content">
          <div className="container">
            {t.studio.services.map((s: any, idx: number) => (
              <div className="service-row" key={idx}>
                <div className="service-title-col">
                  <h2>{renderMultiline(s.title)}</h2>
                  <p>{s.subtitle}</p>
                </div>

                <div className="service-desc-col">
                  <p>{s.description}</p>

                  {s.bullets.map((b: { label: string; answer: string }, i: number) => {
                  const answerId = `studio-answer-${idx}-${i}`;
                  const isOpen = openBulletId === answerId;

                  return (
                  <div className="service-accordion-item" key={i}>
                  <button
                  type="button"
                  className={`service-list-item service-bullet ${isOpen ? "open" : ""}`}
                  onClick={() => setOpenBulletId(isOpen ? null : answerId)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  >
                 {/* Aqui usamos o b.label (o título do item) */}
                 <span>{b.label}</span>
                 <span className="plus" aria-hidden="true">
                 +
                 </span>
                 </button>

                 <div
                id={answerId}
                className={`service-answer ${isOpen ? "open" : ""}`}
                role="region"
                aria-label={`${b.label} answer`}
                 >
                {/* Aqui removemos o Lorem Ipsum e colocamos o b.answer */}
                {renderMultiline(b.answer)}
                </div>
                </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <div className="container contact-section-inner">
            <div className="contact-divider" aria-hidden="true" />
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

  const keys = ["studio.hero", "studio.editorialBreak"];
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

