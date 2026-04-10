import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export default function SiteHeader() {
  const router = useRouter();
  const { locales, locale, asPath } = router;
  const currentLocale = locale ?? "en";
  const availableLocales = locales ?? ["en", "fr", "it", "de", "pt", "es"];
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  function onLocaleChange(nextLocale: string) {
    // Mantém a rota atual e só troca o idioma.
    router.push(asPath, undefined, { locale: nextLocale });
  }

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!langRef.current) return;
      if (e.target instanceof Node && langRef.current.contains(e.target)) return;
      setLangOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  useEffect(() => {
    // Fecha o menu quando trocar de rota/idioma.
    setMobileOpen(false);
    setLangOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath, currentLocale]);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: ReactNode;
  }) => (
    <Link href={href} locale={locale}>
      {children}
    </Link>
  );

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" locale={locale} className="logo-link">
            <img
              src="/images/Logo-AGNUM.svg"
              alt="AGNUM logo"
              className="logo"
            />
          </Link>

          <nav className="main-nav">
            <NavLink href="/studio">THE STUDIO</NavLink>
            <NavLink href="/portfolio">PORTFOLIO</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>
          </nav>

          <div className="lang-nav" aria-label="Language">
            <div
              className={`lang-dropdown ${langOpen ? "open" : ""}`}
              ref={langRef}
            >
              <button
                type="button"
                className="lang-trigger"
                aria-label="Select language"
                aria-haspopup="menu"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                <span className="lang-current">{currentLocale.toUpperCase()}</span>
                <span className="lang-arrow" aria-hidden="true">
                  ▾
                </span>
              </button>

              <div className="lang-menu" role="menu" aria-label="Language options">
                {availableLocales.map((l) => (
                  <button
                    key={l}
                    type="button"
                    role="menuitemradio"
                    aria-checked={l === currentLocale}
                    className={`lang-option ${l === currentLocale ? "active" : ""}`}
                    onClick={() => {
                      setLangOpen(false);
                      onLocaleChange(l);
                    }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <button
            type="button"
            className="mobile-menu"
            aria-label="Menu"
            aria-controls="mobileNav"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            className={`mobile-nav-overlay ${mobileOpen ? "active" : ""}`}
            id="mobileNav"
          >
            <button
              type="button"
              className="close-menu"
              id="closeBtn"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              &times;
            </button>

            <nav className="mobile-nav-links">
              <Link href="/" locale={locale} onClick={() => setMobileOpen(false)}>
                HOME
              </Link>
              <Link href="/studio" locale={locale} onClick={() => setMobileOpen(false)}>
                THE STUDIO
              </Link>
              <Link
                href="/portfolio"
                locale={locale}
                onClick={() => setMobileOpen(false)}
              >
                PORTFOLIO
              </Link>
              <Link href="/contact" locale={locale} onClick={() => setMobileOpen(false)}>
                CONTACT
              </Link>
            </nav>

            <div className="mobile-lang-select" aria-label="Language">
              <label className="sr-only" htmlFor="mobileLangSelect">
                Language
              </label>
              <select
                id="mobileLangSelect"
                className="lang-select"
                value={currentLocale}
                onChange={(e) => onLocaleChange(e.target.value)}
                aria-label="Select language"
              >
                {availableLocales.map((l) => (
                  <option key={l} value={l}>
                    {l.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

