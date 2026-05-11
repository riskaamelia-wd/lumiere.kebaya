import { motion } from "framer-motion";
import kebayaImage5 from "../assets/kebaya 5.jpg";
import kebayaImage6 from "../assets/kebaya 6.jpg";

export function About() {
  return (
    <motion.div
      className="relative mt-8 flex min-h-screen items-center overflow-hidden py-10 md:py-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(216,188,119,0.12),transparent_34%)]"
        aria-hidden
      />
      <motion.section
        className="relative w-full overflow-hidden rounded-4xl border border-[#d8bc77]/20 bg-[#f2e6cf]/6 p-4 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.9)] backdrop-blur-[1px] md:p-6 lg:p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ delay: 0.2, duration: 0.45 }}
      >
        <div className="grid min-h-[calc(100vh-10rem)] items-center gap-7 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
          <motion.div
            className="relative min-h-96"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.28, duration: 0.45 }}
          >
            <div className="absolute left-0 top-0 h-[82%] w-[72%] overflow-hidden rounded-[1.75rem] border border-[#d8bc77]/45 bg-[#efe3cb] shadow-[0_24px_58px_-36px_rgba(0,0,0,0.95)]">
              <motion.img
                src={kebayaImage5}
                alt="Detail kebaya Lumière"
                className="h-full w-full object-cover object-top"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[68%] w-[58%] overflow-hidden rounded-[1.75rem] border border-[#d8bc77]/55 bg-[#efe3cb] shadow-[0_24px_58px_-34px_rgba(0,0,0,0.95)]">
              <motion.img
                src={kebayaImage6}
                alt="Koleksi kebaya Lumière"
                className="h-full w-full object-cover object-top"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="absolute left-5 top-5 rounded-full border border-[#d8bc77]/35 bg-[#2b0f17]/70 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#d8bc77] backdrop-blur">
              Est. 2026
            </div>
          </motion.div>
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.42, duration: 0.45 }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8bc77]/75">
              Tentang Lumière Kebaya
            </p>
            <h2 className="mb-4 font-serif text-3xl tracking-tight text-[#f2e6cf] sm:text-4xl md:text-5xl">
              Kisah Keanggunan Lumière
            </h2>
            <p className="mb-5 leading-8 text-[#f2e6cf]/75">
              Koleksi kebaya Lumière didesain untuk menghadirkan keanggunan
              abadi dengan sentuhan modern. Kami hadir untuk mereka yang
              berselera resepsi yang mewah, atau lamaran yang khidmat.
            </p>
            <div className="mb-6 grid grid-cols-3 gap-3 text-center">
              {[
                { value: "Premium", label: "Kurasi" },
                { value: "Fitting", label: "Personal" },
                { value: "Elegan", label: "Detail" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#d8bc77]/15 bg-[#f2e6cf]/5 px-3 py-3"
                >
                  <p className="font-serif text-lg font-bold text-[#d8bc77]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#f2e6cf]/55">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
