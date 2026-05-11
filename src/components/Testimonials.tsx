import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Citra Dewi",
    image:
      "https://images.unsplash.com/photo-1644102586005-191042134992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tYW4lMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3NzU1NTkzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    text: "Kebaya yang saya sewa sangat indah dan berkualitas. Saya merasa sangat percaya diri saat tampil dengan kebaya dari Lumière!",
  },
  {
    id: 2,
    name: "Nurul Kamilah",
    image:
      "https://images.unsplash.com/photo-1643908849639-2d107f9bc009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWphYiUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NzU1NTkzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    text: "Pelayanan yang ramah dan profesional. Kebaya-nya sangat cantik dan fitting-nya pas. Terima kasih Lumière!",
  },
  {
    id: 3,
    name: "Dewi Kartika",
    image:
      "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU1MDgxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    text: "Desainnya elegan dan detail sulaman sangat rapi. Saya akan merekomendasikan Lumière kepada teman-teman saya!",
  },
  {
    id: 4,
    name: "Nurul Kamilah",
    image:
      "https://images.unsplash.com/photo-1643908849639-2d107f9bc009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWphYiUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NzU1NTkzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    text: "Pelayanan yang ramah dan profesional. Kebaya-nya sangat cantik dan fitting-nya pas. Terima kasih Lumière!",
  },
  {
    id: 5,
    name: "Dewi Kartika",
    image:
      "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU1MDgxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
    text: "Desainnya elegan dan detail sulaman sangat rapi. Saya akan merekomendasikan Lumière kepada teman-teman saya!",
  },
];

export function Testimonials() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = isDesktop ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

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
      className="relative flex min-h-screen items-center overflow-hidden py-12 md:min-h-0 md:py-16 lg:min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(216,188,119,0.16),transparent_36%),linear-gradient(180deg,rgba(43,15,23,0),rgba(43,15,23,0.42)_48%,rgba(43,15,23,0))]" />
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #8f7440 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-3 md:px-5">
        <motion.div
          className="mx-auto mb-8 max-w-2xl text-center md:mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8bc77]/75">
            Suara pelanggan
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-[#f2e6cf] sm:text-4xl md:text-5xl">
            Client Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#f2e6cf]/70 md:text-base">
            Pengalaman pelanggan yang tampil percaya diri bersama koleksi
            Lumière Kebaya.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-4xl border border-[#d8bc77]/20 bg-[#f2e6cf]/5 p-3 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-[1px] md:p-5">
          <div
            className="flex transition-transform duration-700 ease-out will-change-transform"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="px-2"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  delay: 0.2 + (testimonial.id - 1) * 0.06,
                  duration: 0.35,
                }}
              >
                <div className="relative h-full min-h-80 rounded-3xl border border-[#d8bc77]/18 bg-[#2b0f17]/72 p-5 text-left shadow-[0_18px_42px_-32px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8bc77]/45 hover:bg-[#35131f]/80 md:p-6">
                  <Quote className="absolute right-5 top-5 h-9 w-9 text-[#d8bc77]/18" />
                  <div className="mb-5 flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-[#d8bc77]/45 bg-[#efe3cb] shadow-[0_12px_28px_-22px_rgba(216,188,119,0.9)]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-serif text-xl leading-tight text-[#fff3d6]">
                        {testimonial.name}
                      </p>
                      <div className="mt-2 flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-[#d8bc77] text-[#d8bc77]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="min-h-28 text-sm italic leading-7 text-[#f2e6cf]/78">
                    "{testimonial.text}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <motion.div
            className="mt-5 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.35, duration: 0.35 }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
              <motion.button
                key={dotIndex}
                type="button"
                aria-label={`Lihat slide ${dotIndex + 1}`}
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
