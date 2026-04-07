import type { GetServerSideProps } from "next";
import Link from "next/link";
import PublicLayout from "../components/PublicLayout";
import { getGalleriesByKeys } from "../lib/gallery";
import { getT, renderMultiline } from "../lib/translations";

type ImageRow = { src: string; alt: string | null };

function byKey(map: Record<string, ImageRow[]>, key: string) {
  return map[key] ?? [];
}

export default function PortfolioPage({
  locale,
  galleries,
}: {
  locale: string;
  galleries: Record<string, ImageRow[]>;
}) {
  const t = getT(locale);

  const frame1Left = byKey(galleries, "portfolio.frame1.left").slice(0, 4);
  const frame1Right = byKey(galleries, "portfolio.frame1.right")[0];
  const frame1Single = byKey(galleries, "portfolio.frame1.single")[0];
  const frame1Row = byKey(galleries, "portfolio.frame1.row");

  const frame2Left = byKey(galleries, "portfolio.frame2.left").slice(0, 4);
  const frame2Right = byKey(galleries, "portfolio.frame2.right").slice(0, 4);

  const separator = byKey(galleries, "portfolio.separator")[0];
  const frame3Row = byKey(galleries, "portfolio.frame3.row");
  const frame4Quad = byKey(galleries, "portfolio.frame4.quad");

  return (
    <PublicLayout locale={locale}>
      <main className="content-wrapper">
        <section className="portfolio-intro">
          <div className="container">
            <h1>{t.portfolio.title}</h1>
            <p>{renderMultiline(t.portfolio.description)}</p>
          </div>
        </section>

        <section className="portfolio-frame-1">
          <div className="container">
            <div className="mosaic-grid-f1">
              <div className="mosaic-left">
                {frame1Left.map((img) => (
                  <img key={img.src} src={`/images/${img.src}`} alt={img.alt ?? ""} />
                ))}
              </div>
              <div className="mosaic-right">
                <img src={`/images/${frame1Right?.src ?? "PORTFOLIO5.jpg"}`} alt={frame1Right?.alt ?? ""} />
              </div>
            </div>

            <div className="single-centered f1-p6">
              <img
                src={`/images/${frame1Single?.src ?? "PORTFOLIO6.jpg"}`}
                alt={frame1Single?.alt ?? ""}
              />
            </div>

            <div className="horizontal-row f1-row">
              {frame1Row.slice(0, 3).map((img) => (
                <img key={img.src} src={`/images/${img.src}`} alt={img.alt ?? ""} />
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-frame-2">
          <div className="container">
            <div className="dual-columns">
              <div className="col-left">
                {frame2Left.map((img, idx) => {
                  const className =
                    idx === 0 ? "p10" : idx === 1 ? "p11" : idx === 2 ? "p14" : "p16";
                  return (
                    <img
                      key={img.src}
                      src={`/images/${img.src}`}
                      alt={img.alt ?? ""}
                      className={className}
                    />
                  );
                })}
              </div>
              <div className="col-right">
                {frame2Right.map((img, idx) => {
                  const className =
                    idx === 0 ? "p12" : idx === 1 ? "p13" : idx === 2 ? "p18" : "p17";
                  return (
                    <img
                      key={img.src}
                      src={`/images/${img.src}`}
                      alt={img.alt ?? ""}
                      className={className}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <div className="single-centered portfolio-separator">
          <img src={`/images/${separator?.src ?? "PORTFOLIO15.jpg"}`} alt={separator?.alt ?? ""} />
        </div>

        <section className="portfolio-frame-3">
          <div className="container">
            <div className="horizontal-row f3-row">
              {frame3Row.slice(0, 3).map((img) => (
                <img key={img.src} src={`/images/${img.src}`} alt={img.alt ?? ""} />
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-frame-4">
          <div className="container">
            <div className="final-grid-quad">
              {frame4Quad.slice(0, 4).map((img) => (
                <img key={img.src} src={`/images/${img.src}`} alt={img.alt ?? ""} />
              ))}
            </div>

            <div className="portfolio-cta">
              <Link
                href="/contact"
                locale={locale}
                className="section-link"
              >
                {t.portfolio.cta}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = ctx.locale ?? "pt";

  const keys = [
    "portfolio.frame1.left",
    "portfolio.frame1.right",
    "portfolio.frame1.single",
    "portfolio.frame1.row",
    "portfolio.frame2.left",
    "portfolio.frame2.right",
    "portfolio.separator",
    "portfolio.frame3.row",
    "portfolio.frame4.quad",
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

