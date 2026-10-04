"use client";

import { useEffect, useState } from "react";
import {
  FaDumbbell,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

// ---- Edit these ----

const WHATSAPP_NUMBER = ""; // country code + number, no "+"
const WHATSAPP_TEXT =
  "Hi FITNESS4U, I want to know more about your membership plans.";

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Gallery", id: "gallery" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

function HeaderBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Smooth scrolling + offset so sections don't hide under the sticky header
  useEffect(() => {
    const root = document.documentElement;
    const prevBehavior = root.style.scrollBehavior;
    const prevPadding = root.style.scrollPaddingTop;
    root.style.scrollBehavior = "smooth";
    root.style.scrollPaddingTop = "80px";
    return () => {
      root.style.scrollBehavior = prevBehavior;
      root.style.scrollPaddingTop = prevPadding;
    };
  }, []);

  // Header shadow on scroll (rAF-throttled, passive)
  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 8);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: lock body scroll + close on Escape / when resizing to desktop
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled && !menuOpen
          ? "border-gray-200/80 bg-white/80 shadow-[0_8px_30px_-12px_rgba(24,24,27,0.2)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/75"
          : "border-gray-100 bg-white shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}
        <a
          href="#home"
          onClick={() => {
            setActive("home");
            setMenuOpen(false);
          }}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Fitness4U Club Buxar home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-white shadow-md shadow-red-200 transition duration-300 group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-red-700">
            <FaDumbbell size={20} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[22px] font-black tracking-tight text-zinc-900 sm:text-2xl">
              Fitness<span className="text-red-600">4U</span>
            </span>
            <span className="mt-1 text-[9px] font-semibold tracking-[0.3em] text-gray-400 sm:text-[10px]">
              CLUB BUXAR
            </span>
          </span>
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-1 lg:flex xl:gap-3" aria-label="Main">
          {NAV_ITEMS.map(({ name, id }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActive(id)}
                aria-current={isActive ? "page" : undefined}
                className={`group relative px-3 py-2 text-[15px] tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "font-bold text-red-600"
                    : "font-semibold text-zinc-800 hover:text-red-600"
                }`}
              >
                {name}
                <span
                  className={`absolute -bottom-0.5 left-3 right-3 h-[3px] origin-left rounded-full bg-red-600 transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-2.5 lg:flex xl:gap-3">
          {/* Call */}

          {/* WhatsApp */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-green-200 ring-2 ring-white transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-300"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:animate-ping group-hover:opacity-40 motion-reduce:hidden"
            />
            <FaWhatsapp size={23} className="relative" />
          </a>

          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={() => setActive("contact")}
            className="group flex h-11 items-center gap-2.5 rounded-full bg-red-600 px-5 text-[13px] font-extrabold tracking-wider text-white shadow-lg shadow-red-200 transition duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-xl hover:shadow-red-300 active:translate-y-0 xl:px-6"
          >
            🏋️ JOIN US
            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* ================= MOBILE / TABLET TOGGLE ================= */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 transition duration-300 hover:bg-red-600 hover:text-white lg:hidden"
        >
          <FiMenu
            size={24}
            className={`absolute transition-all duration-300 ${
              menuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <FiX
            size={24}
            className={`absolute transition-all duration-300 ${
              menuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          />
        </button>
      </div>

      {/* ================= MOBILE MENU (animated height) ================= */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="overflow-hidden">
          <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-gray-100 px-5 pb-6 pt-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_ITEMS.map(({ name, id }, i) => {
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => {
                      setActive(id);
                      setMenuOpen(false);
                    }}
                    style={{ transitionDelay: menuOpen ? `${60 + i * 40}ms` : "0ms" }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-300 ${
                      menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                    } ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-zinc-800 hover:bg-gray-50 hover:text-red-600"
                    }`}
                  >
                    {name}
                    <span
                      className={`h-2 w-2 rounded-full transition-colors ${
                        isActive ? "bg-red-600" : "bg-transparent"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={menuOpen ? 0 : -1}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-bold text-white shadow-md shadow-green-200 transition active:scale-95"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </a>
            </div>

            <a
              href="#contact"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => {
                setActive("contact");
                setMenuOpen(false);
              }}
              className="group mt-3 flex h-12 items-center justify-center gap-2.5 rounded-xl bg-red-600 text-sm font-extrabold tracking-wider text-white shadow-lg shadow-red-200 transition hover:bg-red-700 active:scale-[0.98]"
            >
              🏋️ JOIN US
              <FaArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// ================= FLOATING WHATSAPP (mobile + tablet only) =================
// Rendered OUTSIDE <header> on purpose: the header uses backdrop-blur, which would
// otherwise turn "position: fixed" into "fixed relative to the header".
function FloatingWhatsApp() {
  return (
    <>
      <style>{`
        @keyframes fwa-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes fwa-pulse {
          0% { transform: scale(1); opacity: 0.45; }
          70%, 100% { transform: scale(1.65); opacity: 0; }
        }
        .fwa-float { animation: fwa-float 3.2s ease-in-out infinite; }
        .fwa-pulse { animation: fwa-pulse 2.6s cubic-bezier(0.22, 0.61, 0.36, 1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .fwa-float, .fwa-pulse { animation: none; }
        }
      `}</style>

      {/* Visible on mobile + tablet; hidden from lg (desktop) up */}
      <div className="fixed right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 sm:right-6 sm:bottom-[max(1.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <div className="fwa-float">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with FITNESS4U on WhatsApp"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.55),0_6px_12px_-6px_rgba(0,0,0,0.3)] ring-2 ring-white/90 transition duration-300 ease-out hover:scale-110 hover:bg-[#20bd5a] focus-visible:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300 active:scale-95 sm:h-16 sm:w-16"
          >
            {/* Soft green glow */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[#25D366]/35 blur-xl"
            />
            {/* Pulse ring */}
            <span
              aria-hidden="true"
              className="fwa-pulse pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]"
            />
            <FaWhatsapp className="relative h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />

            {/* Tooltip (hover / keyboard focus, sm and up) */}
            <span
              role="tooltip"
              className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block"
            >
              Chat on WhatsApp
              <span
                aria-hidden="true"
                className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-zinc-900 p-1"
              />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

// ================= EXPORT =================
// Same import as before: `import Header from "./Header"` now renders the header + floating button.
export default function Header() {
  return (
    <>
      <HeaderBar />
      <FloatingWhatsApp />
    </>
  );
}