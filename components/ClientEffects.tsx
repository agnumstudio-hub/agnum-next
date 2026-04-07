"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

function setupMobileMenu() {
  const menuBtn = document.querySelector(".mobile-menu") as HTMLElement | null;
  const mobileNav = document.getElementById("mobileNav") as HTMLElement | null;
  const closeBtn = document.getElementById("closeBtn") as HTMLButtonElement | null;
  const navLinks = document.querySelectorAll(
    ".mobile-nav-links a"
  ) as NodeListOf<HTMLAnchorElement>;

  if (!menuBtn || !mobileNav || !closeBtn) return;

  const open = () => {
    mobileNav.classList.add("active");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    mobileNav.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  menuBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  navLinks.forEach((link) => link.addEventListener("click", close));

  return () => {
    menuBtn.removeEventListener("click", open);
    closeBtn.removeEventListener("click", close);
    navLinks.forEach((link) => link.removeEventListener("click", close));
  };
}

function setupContactForm() {
  const externalEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();

  function buildMailtoUrl(data: FormData) {
    const to = (process.env.NEXT_PUBLIC_CONTACT_MAILTO_TO ?? "").trim();
    if (!to) return null;

    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Novo contato AGNUM - ${name || "Sem nome"}`;
    const body = [
      `Nome: ${name || "-"}`,
      `Empresa: ${company || "-"}`,
      `Email: ${email || "-"}`,
      "",
      "Mensagem:",
      message || "-",
    ].join("\n");

    return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  // Event delegation: evita ter que “re-instalar” handlers a cada troca de rota.
  const onSubmit = async (e: Event) => {
    const target = e.target;
    if (!(target instanceof HTMLFormElement)) return;
    if (target.getAttribute("name") !== "contact") return;

    e.preventDefault();

    const data = new FormData(target);
    const btn = document.getElementById("submit-btn") as HTMLButtonElement | null;
    const msg = document.getElementById("sent-message") as HTMLSpanElement | null;

    try {
      const endpoint = externalEndpoint || "/api/contact";
      const isExternal = endpoint !== "/api/contact";
      const payload = new URLSearchParams(data as any).toString();
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ...(isExternal ? { Accept: "application/json" } : {}),
        },
        body: payload,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      if (btn) btn.style.display = "none";
      if (msg) msg.style.display = "block";
      target.reset();
    } catch (err) {
      const mailto = buildMailtoUrl(data);
      if (mailto) {
        window.location.href = mailto;
        return;
      }

      // eslint-disable-next-line no-console
      console.error("Erro no envio:", err);
    }
  };

  document.addEventListener("submit", onSubmit);
  return () => document.removeEventListener("submit", onSubmit);
}

export default function ClientEffects() {
  const router = useRouter();

  useEffect(() => {
    // Fade-in do body.
    const addLoaded = () => document.body.classList.add("loaded");
    addLoaded();
    window.addEventListener("load", addLoaded);

    // Setup DOM-dependent behavior.
    const cleanupMenu = setupMobileMenu();
    const cleanupContact = setupContactForm();

    // Home effects:
    // - Scale images in "perspective" when they enter the viewport
    let imgObserver: IntersectionObserver | null = null;

    const perspectiveImgs = Array.from(
      document.querySelectorAll(
        ".perspective-section .p-grid img"
      )
    ) as HTMLImageElement[];

    if (typeof IntersectionObserver !== "undefined" && perspectiveImgs.length) {
      imgObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            (entry.target as HTMLElement).classList.add("visible");
            imgObserver?.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );

      perspectiveImgs.forEach((img) => imgObserver?.observe(img));
    } else {
      // Fallback: evita deixar as imagens invisíveis caso IntersectionObserver não exista.
      perspectiveImgs.forEach((img) => img.classList.add("visible"));
    }

    return () => {
      window.removeEventListener("load", addLoaded);
      cleanupMenu?.();
      cleanupContact?.();
      imgObserver?.disconnect();
    };
    // Re-instala quando a rota muda (novos elementos entram no DOM).
  }, [router.asPath]);

  return null;
}

