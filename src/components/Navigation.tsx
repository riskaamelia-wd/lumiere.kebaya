import logoImage from "../assets/logo.png";
import { motion } from "framer-motion";
import {
  GENERAL_WHATSAPP_MESSAGE,
  getWhatsAppHref,
} from "../lib/constant/const";

const WA_HREF = getWhatsAppHref(GENERAL_WHATSAPP_MESSAGE);

export function Navigation() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#katalog", label: "Katalog" },
    { href: "#cara-sewa", label: "Cara Sewa" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <motion.nav
      className="w-full"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex w-full flex-col gap-2.5">
        <div className="flex w-full items-center justify-center gap-4 md:justify-between md:gap-6">
          <motion.a
            href="#home"
            className="flex min-w-0 shrink-0 items-center justify-center gap-3 md:justify-start md:gap-4"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.05, duration: 0.45 }}
          >
            <img
              src={logoImage}
              alt=""
              className="h-12 w-auto object-contain sm:h-14 md:h-12"
              width={80}
              height={80}
            />
            <span className="font-serif text-sm font-semibold tracking-tight text-[#e8dcc4] md:text-[0.9rem]">
              Lumière Kebaya
            </span>
          </motion.a>

          <motion.div
            className="hidden min-w-0 flex-1 justify-end md:flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <nav
              className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm font-medium lg:gap-x-10"
              aria-label="Menu utama"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-[#e8dcc4]/85 transition-colors hover:text-white"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ delay: 0.12 + index * 0.04, duration: 0.35 }}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            className="hidden shrink-0 lg:block"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            <motion.a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#b84d62] to-[#6e1a2e] px-4 py-2 text-xs font-semibold text-white shadow-[0_0_24px_-4px_rgba(160,45,68,0.5)] transition-[box-shadow,transform] hover:shadow-[0_0_28px_-2px_rgba(184,77,98,0.45)] md:py-1.5 md:text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sewa via WhatsApp
            </motion.a>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 border-t border-[#c9a961]/15 pt-2.5 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.7rem] font-medium text-[#e8dcc4]/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
