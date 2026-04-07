import { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PublicLayout({
  children,
  locale,
}: {
  children: ReactNode;
  locale?: string;
}) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}

