import { ReactNode } from "react";
import Head from "next/head";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PublicLayout({
  children,
  locale,
  pageTitle, // Nova propriedade adicionada
}: {
  children: ReactNode;
  locale?: string;
  pageTitle?: string;
}) {
  // Se passar um pageTitle, fica "AGNUM | Titulo". Se não, fica o padrão.
  const title = pageTitle ? `AGNUM | ${pageTitle}` : "AGNUM CREATIVE STUDIO";

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* Usando o SVG que já existe no seu projeto para garantir que carregue */}
        <link rel="icon" type="image/svg+xml" href="/images/Logo-AGNUM.svg" />
        <link rel="shortcut icon" href="/images/Logo-AGNUM.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SiteHeader />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
