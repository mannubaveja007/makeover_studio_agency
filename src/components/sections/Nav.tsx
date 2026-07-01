"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AGENCY_NAME, NAV_LINKS, INSTAGRAM_URL } from "@/lib/constants";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200/50"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-neutral-900"
          aria-label={`${AGENCY_NAME} — Home`}
        >
          Content Makeover Studio
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover-underline text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-scale inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              aria-label="Follow us on Instagram"
            >
              Instagram
              <ArrowUpRight />
            </a>
          </li>
        </ul>

        {/* Mobile hamburger — 44px min touch target */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-neutral-900 lg:hidden -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-neutral-100 bg-white lg:hidden"
          >
            <ul className="flex flex-col px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3.5 text-base text-neutral-600 active:text-neutral-900"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3 pt-3 border-t border-neutral-100">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-3.5 text-base font-medium text-neutral-900"
                  onClick={closeMobile}
                >
                  Instagram
                  <ArrowUpRight />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
