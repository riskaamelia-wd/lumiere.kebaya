import type { ReactNode } from "react";
import { Globe, Mail, Phone } from "lucide-react";
import logoImage from "../assets/logo.png";

// * Ganti placeholder dengan URL profil sosial Anda.
const FACEBOOK_URL = "https://www.facebook.com/YOUR_PAGE";
const INSTAGRAM_URL = "https://www.instagram.com/YOUR_USERNAME/";
const TIKTOK_URL = "https://www.tiktok.com/@YOUR_USERNAME";

function FacebookLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function FooterColumnTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={` pb-3 pt-3 font-bold  text-sm uppercase tracking-[0.3em] text-[#d4af37] md:text-base ${className}`}
    >
      {children}
    </h3>
  );
}

function footerLinkClass() {
  return "block text-sm text-[#f5e6be] transition-colors hover:text-[#d4af37] tracking-[0.2em]";
}

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#2d0b0b] text-[#f5e6be] py-12 "
      id="kontak"
    >
      <div className="relative z-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8 xl:gap-12">
          <div className="flex w-full max-w-md shrink-0 justify-between gap-8 sm:max-w-none sm:justify-start  border-t-2 border-[#d4af37]/55 md:gap-14 lg:w-auto lg:max-w-none">
            <div className="min-w-[7.5rem] flex-1 sm:flex-none">
              <FooterColumnTitle>Tautan Langsung</FooterColumnTitle>
              <nav className="space-y-2.5">
                <a href="#home" className={footerLinkClass()}>
                  Beranda
                </a>
                <a href="#katalog" className={footerLinkClass()}>
                  Cara Memesan
                </a>
                <a href="#kontak" className={footerLinkClass()}>
                  Kontak
                </a>
              </nav>
            </div>
            <div className="min-w-[7.5rem] flex-1 sm:flex-none">
              <FooterColumnTitle>Layanan</FooterColumnTitle>
              <nav className="space-y-2.5">
                <a href="#katalog" className={footerLinkClass()}>
                  Katalog
                </a>
                <a href="#cara-sewa" className={footerLinkClass()}>
                  Cara Sewa
                </a>
                <a href="#kontak" className={footerLinkClass()}>
                  Kontak
                </a>
              </nav>
            </div>
          </div>

          <div className="flex w-[clamp(7rem,12vw,10rem)] shrink-0 flex-col items-center p-0 lg:h-auto lg:flex-1 lg:justify-center">
            <img
              src={logoImage}
              alt="Lumière Kebaya"
              className="block h-auto max-h-[clamp(7rem,12vw,10rem)] w-full object-contain"
            />
          </div>

          <div className="w-full shrink-0  lg:max-w-sm xl:max-w-md  border-t border-[#d4af37]/55">
            <FooterColumnTitle className="text-left">Kontak</FooterColumnTitle>

            <div className="mt-3 flex flex-col items-center gap-8 sm:flex-row sm:items-center justify-start lg:gap-12">
              <address className="space-y-3  text-sm not-italic">
                <div className="flex items-start gap-3 justify-start">
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]"
                    aria-hidden
                  />
                  <a
                    href="tel:+628997337380"
                    className="text-left transition-colors hover:text-[#d4af37] lg:text-right tracking-[0.2em]"
                  >
                    0899 733 7380
                  </a>
                </div>
                <div className="flex items-start gap-3 justify-start">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]"
                    aria-hidden
                  />
                  <a
                    href="mailto:info@lumiere.com"
                    className="break-all text-left transition-colors hover:text-[#d4af37] lg:text-right tracking-[0.2em]"
                  >
                    info@lumiere.com
                  </a>
                </div>
                <div className="flex items-start gap-3 justify-start">
                  <Globe
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]"
                    aria-hidden
                  />
                  <a
                    href="https://www.lumiere.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left transition-colors hover:text-[#d4af37] lg:text-right tracking-[0.2em]"
                  >
                    www.lumiere.com
                  </a>
                </div>
              </address>
              <div className="flex gap-2.5 lg:gap-6">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Lumière Kebaya"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3d1616] text-[#d4af37] ring-1 ring-[#d4af37]/35 transition-colors hover:bg-[#4a2525]"
                >
                  <FacebookLogoIcon className="h-[15px] w-[15px]" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Lumière Kebaya"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3d1616] text-[#d4af37] ring-1 ring-[#d4af37]/35 transition-colors hover:bg-[#4a2525]"
                >
                  <InstagramLogoIcon className="h-[15px] w-[15px]" />
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Lumière Kebaya"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3d1616] text-[#d4af37] ring-1 ring-[#d4af37]/35 transition-colors hover:bg-[#4a2525]"
                >
                  <TikTokLogoIcon className="h-[15px] w-[15px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#d4af37]/20 pt-6 text-center text-xs text-[#d4af37]/55 md:text-sm">
          <p>&copy; 2026 Lumière Kebaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
