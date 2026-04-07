export default function SiteFooter({ locale }: { locale?: string }) {
  const year = new Date().getFullYear();

  const copyByLocale: Record<string, string> = {
    pt: `© ${year} AGNUM CREATIVE STUDIO. Todos os direitos reservados.`,
    en: `© ${year} AGNUM CREATIVE STUDIO. All rights reserved.`,
    es: `© ${year} AGNUM CREATIVE STUDIO. Todos los derechos reservados.`,
  };

  const copy = copyByLocale[locale ?? "pt"] ?? copyByLocale.pt;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-divider-wrapper">
          <span className="divider-line" />
        </div>

        <div className="footer-inner">
          <p className="footer-copy">{copy}</p>

          <nav className="footer-social" aria-label="Social links">
            <a
              href="https://instagram.com/agnumstudio"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
            <a
              href="https://pinterest.com/agnumstudio/"
              target="_blank"
              rel="noreferrer"
            >
              PINTEREST
            </a>
            <a
              href="https://x.com/agnumstudio"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
            <a
              href="https://linkedin.com/company/agnumstudio"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

