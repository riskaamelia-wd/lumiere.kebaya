import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
      className="relative overflow-hidden border-y border-[#dac58f]/50 bg-[#efe3cb] py-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="absolute inset-0 opacity-[0.09]">
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
        <motion.h2
          className="mb-7 text-center font-serif text-3xl tracking-tight text-[#2c1417] sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Client Testimonials
        </motion.h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="px-2 text-center"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  delay: 0.2 + (testimonial.id - 1) * 0.06,
                  duration: 0.35,
                }}
              >
                <div className="mx-auto mb-3 h-28 w-28 overflow-hidden rounded-full border-[3px] border-[#d1b374] shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mb-2 flex justify-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#b79048] text-[#b79048]"
                    />
                  ))}
                </div>

                <p className="mb-1 min-h-[4.5rem] px-2 text-sm italic leading-relaxed text-[#3f2a26]">
                  "{testimonial.text}"
                </p>

                <p className="text-sm font-semibold text-[#2c1417]">
                  {testimonial.name}
                </p>
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
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  currentIndex === dotIndex ? "bg-[#8f6d34]" : "bg-[#d4be8f]"
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
