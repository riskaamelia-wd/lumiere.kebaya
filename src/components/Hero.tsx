import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/jumbotron.jpg";

export function Hero() {
  return (
    <motion.section
      className="pb-4 pt-3"
      id="home"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-5xl overflow-hidden border border-[#d8bc77]/40 bg-[#f0e3cc] shadow-xl">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <motion.div
            className="p-6 md:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <motion.h2
              className="mb-3 font-serif text-3xl leading-tight text-[#2c1417] md:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.2, duration: 0.45 }}
            >
              Tampil Memukau di Hari Spesial: Wisuda, Resepsi, Lamaran
            </motion.h2>
            <motion.p
              className="mb-6 text-lg text-[#533231]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.27, duration: 0.4 }}
            >
              Koleksi Eksklusif Kebaya Mewah untuk Setiap Momen Berharga Anda
            </motion.p>
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#4d2b27] bg-[#2d1419] px-4 py-2 text-[0.65rem] font-semibold tracking-[0.06em] text-[#e5c67a] transition-colors hover:bg-[#4d2b27] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm sm:tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.34, duration: 0.4 }}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              SEWA VIA WHATSAPP (FREE FITTING)
            </motion.a>
          </motion.div>
          <motion.div
            className="relative h-full min-h-[280px]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
          >
            <motion.img
              src={heroImage}
              alt="Model wearing Lumière Kebaya"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
