import { CalendarHeart, Clock, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/jumbotron.jpg";

const WA_HREF = "https://wa.me/6281234567890";

export function Hero() {
  return (
    <motion.section
      className="w-full scroll-mt-36 pb-6 "
      id="home"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="relative w-full overflow-hidden rounded-4xl border border-[#e5c67a]/15 bg-[#35131f]/55 shadow-[0_28px_80px_-32px_rgba(0,0,0,0.85)] backdrop-blur-[1px]">
        <div className="relative grid items-stretch gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="hero-intro flex min-w-0 flex-col justify-center text-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#e5c67a]/25 bg-[#f0e3cc]/8 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#e5c67a] shadow-[0_12px_32px_-24px_rgba(229,198,122,0.8)]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.16, duration: 0.4 }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Premium Kebaya Rental
            </motion.div>
            <motion.h1
              className="mb-4 max-w-xl font-serif text-[clamp(1.9rem,4.5vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[#f8ecd2] md:mb-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.2, duration: 0.45 }}
            >
              Tampil Anggun di Setiap Hari Spesial
            </motion.h1>
            <motion.p
              className="mb-7 max-w-lg text-sm leading-7 text-[#f0e3cc]/85 sm:text-base md:mb-8 md:text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.27, duration: 0.4 }}
            >
              Koleksi kebaya mewah untuk wisuda, lamaran, resepsi, dan momen
              istimewa Anda, lengkap dengan free fitting agar tampil percaya
              diri.
            </motion.p>
            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.34, duration: 0.4 }}
            >
              <motion.a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#e5c67a] to-[#b9833a] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#2d1419] shadow-[0_20px_40px_-20px_rgba(229,198,122,0.85)] transition-[box-shadow,transform] hover:shadow-[0_24px_46px_-18px_rgba(229,198,122,0.9)] sm:px-6 sm:text-sm"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                Sewa via WhatsApp
              </motion.a>
              <motion.a
                href="#katalog"
                className="inline-flex items-center justify-center rounded-full border border-[#f0e3cc]/25 px-5 py-3 text-xs font-semibold text-[#f0e3cc] transition-colors hover:border-[#e5c67a]/60 hover:bg-[#f0e3cc]/10 sm:px-6 sm:text-sm"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Lihat Koleksi
              </motion.a>
            </motion.div>
            <motion.div
              className="mt-7 grid max-w-lg grid-cols-2 gap-3 text-[#f0e3cc] sm:grid-cols-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.42, duration: 0.4 }}
            >
              {[
                { value: "50+", label: "Koleksi Premium" },
                { value: "Free", label: "Fitting" },
                { value: "3", label: "Momen Spesial" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#e5c67a]/15 bg-white/5 px-3.5 py-2.5 backdrop-blur"
                >
                  <p className="font-serif text-xl font-bold text-[#e5c67a]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[#f0e3cc]/65">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative min-h-[min(58vh,28rem)] overflow-hidden md:min-h-[min(78vh,42rem)]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
          >
            <motion.img
              src={heroImage}
              alt="Model wearing Lumière Kebaya"
              className="absolute inset-0 h-full w-full object-cover object-top"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#2d1419]/70 via-transparent to-transparent md:bg-linear-to-r md:from-[#35131f] md:via-[#35131f]/10 md:to-transparent"
              aria-hidden
            />
            <motion.div
              className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-[#2d1419]/70 p-4 text-left text-[#f8ecd2] shadow-2xl backdrop-blur-md md:bottom-8 md:left-auto md:right-8 md:w-72"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <div className="mb-3 flex items-center gap-2 text-[#e5c67a]">
                <CalendarHeart className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-[0.16em]">
                  Siap untuk acara Anda
                </span>
              </div>
              <p className="text-sm leading-6 text-[#f0e3cc]/85">
                Konsultasikan ukuran, tanggal sewa, dan gaya kebaya yang paling
                cocok untuk momen Anda.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#f8ecd2]">
                <Clock className="h-4 w-4 text-[#e5c67a]" />
                Booking cepat via WhatsApp
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
