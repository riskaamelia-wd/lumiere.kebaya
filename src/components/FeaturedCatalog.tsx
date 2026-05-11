import { useEffect, useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion } from "framer-motion";
import ornamentImage from "../assets/ornamen.png";
import kebayaImage1 from "../assets/kebaya 1.jpg";
import kebayaImage2 from "../assets/kebaya 2.jpg";
import kebayaImage3 from "../assets/kebaya 3.jpg";
import kebayaImage4 from "../assets/kebaya 4.jpg";
import kebayaImage5 from "../assets/kebaya 5.jpg";
import kebayaImage6 from "../assets/kebaya 6.jpg";

const catalogItems = [
  {
    id: 1,
    title: "Kebaya Biru Mewah dengan Manik",
    occasion: "Wisuda & Resepsi",
    image: kebayaImage1,
  },
  {
    id: 2,
    title: "Kebaya Maroon Elegan",
    occasion: "Lamaran",
    image: kebayaImage2,
  },
  {
    id: 3,
    title: "Kebaya Klasik Berpayet",
    occasion: "Akad & Resepsi",
    image: kebayaImage3,
  },
  {
    id: 4,
    title: "Kebaya Soft Glam",
    occasion: "Photoshoot",
    image: kebayaImage4,
  },
  {
    id: 5,
    title: "Kebaya Premium Modern",
    occasion: "Engagement",
    image: kebayaImage5,
  },
  {
    id: 6,
    title: "Kebaya Detail Mewah",
    occasion: "Special Event",
    image: kebayaImage6,
  },
];

export function FeaturedCatalog() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = isDesktop ? 3 : 1;
  const maxIndex = Math.max(0, catalogItems.length - cardsPerView);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop((prev) => {
        if (prev !== event.matches) {
          setCurrentIndex(0);
        }
        return event.matches;
      });
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (maxIndex <= 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3200);

    return () => {
      window.clearInterval(interval);
    };
  }, [maxIndex]);

  return (
    <motion.section
      className="relative overflow-visible pb-10 pt-12"
      id="katalog"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-8 h-80 bg-[radial-gradient(circle_at_center,rgba(216,188,119,0.14),transparent_65%)]" />
      <div className="mx-auto w-full overflow-visible">
        <div className="relative h-0 overflow-visible">
          <motion.img
            src={ornamentImage}
            alt="Ornamen katalog kiri"
            className="pointer-events-none absolute -left-10 top-2 z-10 h-16 opacity-60 md:-left-14 md:h-20"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 0.75, x: 0 }}
            animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{
              opacity: { delay: 0.12, duration: 0.35 },
              x: { delay: 0.12, duration: 0.35 },
              y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.img
            src={ornamentImage}
            alt="Ornamen katalog kanan"
            className="pointer-events-none absolute -right-10 top-2 z-10 h-16 scale-x-[-1] opacity-60 md:-right-14 md:h-20"
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 0.75, x: 0 }}
            animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{
              opacity: { delay: 0.12, duration: 0.35 },
              x: { delay: 0.12, duration: 0.35 },
              y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
        <motion.div
          className="relative mx-auto mb-8 flex max-w-5xl flex-col items-center gap-3 text-center md:mb-10 md:flex-row md:items-end md:justify-between md:text-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8bc77]/75">
              Pilihan favorit Lumière
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-[#f2e6cf] sm:text-4xl md:text-5xl">
              Katalog Unggulan
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#f2e6cf]/70 md:text-right">
            Jelajahi koleksi kebaya premium dengan tampilan full image,
            detail elegan, dan pilihan yang siap disesuaikan untuk acara Anda.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-4xl border border-[#d8bc77]/20 bg-[#f2e6cf]/5 p-3 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-[1px] md:p-4">
          <div
            className="flex transition-transform duration-700 ease-out will-change-transform"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {catalogItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group px-2 transition-transform duration-300 ease-out hover:-translate-y-1 active:translate-y-0.5 md:px-3"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
              >
                <div className="relative aspect-3/4 overflow-hidden rounded-[1.65rem] border border-[#d7be84]/50 bg-[#efe3cb] shadow-[0_18px_42px_-28px_rgba(0,0,0,0.9)] transition-all duration-300 ease-out group-hover:border-[#f0d99b]/80 group-hover:shadow-[0_24px_52px_-28px_rgba(0,0,0,0.95)] group-active:scale-[0.985]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#18080d]/90 via-[#18080d]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-left md:p-5">
                    <p className="mb-2 w-fit rounded-full border border-[#d8bc77]/35 bg-[#2a0f17]/55 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#e8cd8d] backdrop-blur">
                      {item.occasion}
                    </p>
                    <h3 className="mb-4 font-serif text-xl leading-[1.05] text-[#fff3d6] drop-shadow transition-colors duration-300 group-hover:text-[#f6e7c2] md:text-2xl">
                      {item.title}
                    </h3>
                    <motion.button
                      className="rounded-full border border-[#d8bc77]/70 bg-[#d8bc77] px-5 py-2 text-[0.65rem] font-bold uppercase tracking-wider text-[#2a0f17] shadow-[0_12px_24px_-18px_rgba(216,188,119,0.9)] transition-all duration-200 hover:bg-[#e8cd8d] active:scale-95"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Lihat Detail
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <motion.div
            className="mt-6 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.35, duration: 0.35 }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
              <motion.button
                key={dotIndex}
                type="button"
                aria-label={`Lihat katalog slide ${dotIndex + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === dotIndex
                    ? "w-8 bg-[#d8bc77]"
                    : "w-2.5 bg-[#d8bc77]/35"
                }`}
                onClick={() => setCurrentIndex(dotIndex)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
