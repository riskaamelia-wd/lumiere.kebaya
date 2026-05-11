import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Globe, Mail, MessageCircle, Phone } from "lucide-react";
import logoImage from "../assets/logo.png";
import ornamentImage from "../assets/ornamen.png";

// * Replace placeholders with your social profile URLs.
const FACEBOOK_URL = "https://www.facebook.com/YOUR_PAGE";
const INSTAGRAM_URL = "https://www.instagram.com/YOUR_USERNAME/";
const TIKTOK_URL = "https://www.tiktok.com/@YOUR_USERNAME";
const WA_HREF = "https://wa.me/628997337380";

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
      className={`pb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#d8bc77] md:text-xs lg:text-sm ${className}`}
    >
      {children}
    </h3>
  );
}

function footerLinkClass() {
  return "block text-sm tracking-[0.12em] text-[#f5e6be]/78 transition-colors hover:text-[#d8bc77] md:text-xs lg:text-sm";
}

function socialLinkClass() {
  return "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8bc77]/30 bg-[#2b0f17]/70 text-[#d8bc77] transition-colors hover:bg-[#3d161f]";
}

export function Footer() {
  return (
    <motion.footer
      className="relative mt-8 overflow-visible pb-6 pt-4 text-[#f5e6be]"
      id="kontak"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <motion.img
        src={ornamentImage}
        alt=""
        className="pointer-events-none absolute -bottom-2 -left-8 z-10 h-20 opacity-55 md:h-24"
        aria-hidden
        animate={{ y: [0, -7, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={ornamentImage}
        alt=""
        className="pointer-events-none absolute -bottom-2 -right-8 z-10 h-20 scale-x-[-1] opacity-55 md:h-24"
        aria-hidden
        animate={{ y: [0, -7, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 overflow-hidden rounded-4xl border border-[#d8bc77]/20 bg-[#250b12]/78 p-5 shadow-[0_-18px_70px_-48px_rgba(216,188,119,0.85)] backdrop-blur-[2px] md:p-7 lg:p-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,188,119,0.16),transparent_42%),linear-gradient(180deg,rgba(216,188,119,0.06),transparent_34%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d8bc77 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden
        />

        <div className="relative grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          <motion.div
            className="h-full rounded-3xl border border-[#d8bc77]/18 bg-[#f2e6cf]/5 p-5 backdrop-blur-[1px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.12, duration: 0.45 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={logoImage}
                alt="Lumière Kebaya"
                className="h-18 w-18 shrink-0 object-contain"
              />
              <div className="min-w-0">
                <p className="font-serif text-2xl leading-none text-[#fff3d6]">
                  Lumière Kebaya
                </p>
                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#d8bc77]/80">
                  Premium Rental
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#f5e6be]/72">
              Kebaya pilihan untuk wisuda, lamaran, resepsi, dan momen spesial
              dengan layanan fitting yang nyaman.
            </p>
            <div className="mt-5 flex gap-3">
              <motion.a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Lumière Kebaya"
                className={socialLinkClass()}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                <FacebookLogoIcon className="h-[15px] w-[15px]" />
              </motion.a>
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Lumière Kebaya"
                className={socialLinkClass()}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                <InstagramLogoIcon className="h-[15px] w-[15px]" />
              </motion.a>
              <motion.a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Lumière Kebaya"
                className={socialLinkClass()}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                <TikTokLogoIcon className="h-[15px] w-[15px]" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="grid h-full grid-cols-2 gap-6 rounded-3xl border border-[#d8bc77]/18 bg-[#f2e6cf]/5 p-5 backdrop-blur-[1px] md:gap-8 lg:grid-cols-1"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.16, duration: 0.45 }}
          >
            <div>
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
            <div>
              <FooterColumnTitle>Eksplor</FooterColumnTitle>
              <nav className="space-y-2.5">
                <a href="#home" className={footerLinkClass()}>
                  Beranda
                </a>
                <a href="#cara-sewa" className={footerLinkClass()}>
                  Cara Memesan
                </a>
                <a href="#kontak" className={footerLinkClass()}>
                  Bantuan
                </a>
              </nav>
            </div>
          </motion.div>

          <motion.div
            className="h-full w-full rounded-3xl border border-[#d8bc77]/18 bg-[#f2e6cf]/5 p-5 backdrop-blur-[1px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.18, duration: 0.45 }}
          >
            <FooterColumnTitle className="text-center md:text-left">
              Kontak
            </FooterColumnTitle>

            <div className="flex flex-col gap-5">
              <address className="space-y-3 text-sm not-italic md:text-xs lg:text-sm">
                <div className="flex items-start justify-start gap-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#d8bc77]"
                    aria-hidden
                  />
                  <a
                    href="tel:+628997337380"
                    className="text-left tracking-[0.12em] text-[#f5e6be]/78 transition-colors hover:text-[#d8bc77]"
                  >
                    0899 733 7380
                  </a>
                </div>
                <div className="flex items-start justify-start gap-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#d8bc77]"
                    aria-hidden
                  />
                  <a
                    href="mailto:info@lumiere.com"
                    className="break-all text-left tracking-[0.12em] text-[#f5e6be]/78 transition-colors hover:text-[#d8bc77]"
                  >
                    info@lumiere.com
                  </a>
                </div>
                <div className="flex items-start justify-start gap-3">
                  <Globe
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#d8bc77]"
                    aria-hidden
                  />
                  <a
                    href="https://www.lumiere.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left tracking-[0.12em] text-[#f5e6be]/78 transition-colors hover:text-[#d8bc77]"
                  >
                    www.lumiere.com
                  </a>
                </div>
              </address>
              <motion.a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[#d8bc77]/65 bg-[#d8bc77] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#2d1419] shadow-[0_16px_30px_-24px_rgba(216,188,119,0.9)] transition-colors hover:bg-[#e8cd8d]"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="h-4 w-4" />
                Chat WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mt-7 flex flex-col items-center justify-between gap-3 border-t border-[#d8bc77]/15 pt-5 text-center text-xs text-[#d8bc77]/55 md:flex-row md:text-left md:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <p>&copy; 2026 Lumière Kebaya. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#home" className="transition-colors hover:text-[#d8bc77]">
              Back to top
            </a>
            <span className="h-1 w-1 rounded-full bg-[#d8bc77]/40" />
            <a href="#katalog" className="transition-colors hover:text-[#d8bc77]">
              Lihat katalog
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
