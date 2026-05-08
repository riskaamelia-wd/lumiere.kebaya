import logoImage from "../assets/logo.png";
import { motion } from "framer-motion";

export function Navigation() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#katalog", label: "Katalog" },
    { href: "#cara-sewa", label: "Cara Sewa" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <motion.nav
      className="relative pt-2 md:pt-3"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-5xl   bg-[#2b0f17] py-6 ">
        <motion.div
          className="mb-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
        >
          <motion.img
            src={logoImage}
            alt="Logo Lumiere Kebaya"
            className="h-[150px] w-auto object-contain md:h-[180px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6 border-y border-[#c9a961]/35 py-3 text-sm md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-[#d8bc77] transition-colors hover:text-[#c9a961]/80"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.25 + index * 0.08, duration: 0.35 }}
              whileHover={{ y: -1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}
