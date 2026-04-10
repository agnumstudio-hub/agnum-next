import { ReactNode } from "react";
import Head from "next/head";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { getT } from "../lib/translations";

interface PublicLayoutProps {
  children: ReactNode;
  locale?: string;
  pageTitle?: string; // Mantido para caso queira sobrescrever o título em páginas específicas
}

export default function PublicLayout({
  children,
  locale = "pt",
  pageTitle,
}: PublicLayoutProps) {
  const t = getT(locale) as any;

  // Define o título: Se houver um pageTitle específico, usa ele, senão usa o SEO padrão do arquivo de tradução
  const dynamicTitle = pageTitle ? `AGNUM | ${pageTitle}` : t.metadata.title;

  return (
    <>
      <Head>
        {/* SEO Básico */}
        <title>{dynamicTitle}</title>
        <meta name="description" content={t.metadata.description} />
        <meta name="keywords" content={t.metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.agnumstudio.com" /> {/* Altere para sua URL final */}

        {/* Open Graph / Redes Sociais */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t.metadata.ogTitle} />
        <meta property="og:description" content={t.metadata.description} />
        <meta property="og:image" content="/images/og-share-image.jpg" /> {/* Sugestão: crie esta imagem 1200x630 */}
        <meta property="og:site_name" content="AGNUM" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.metadata.ogTitle} />
        <meta name="twitter:description" content={t.metadata.description} />

        {/* Favicon (Otimizado para não falhar) */}
        <link rel="icon" type="image/svg+xml" href="/images/Logo-AGNUM.svg" />
        <link rel="shortcut icon" href="/images/Logo-AGNUM.svg" />
        <link rel="apple-touch-icon" href="/images/Logo-AGNUM.svg" />
      </Head>

      <SiteHeader />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
