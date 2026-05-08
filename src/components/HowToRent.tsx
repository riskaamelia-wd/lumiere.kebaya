import { BookOpen, CalendarCheck2, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HowToRent() {
  const steps = [
    {
      number: 1,
      icon: BookOpen,
      title: "Jelajahi Katalog Online",
      description: "Lihat Ribuan Desain",
      image:
        "https://images.unsplash.com/photo-1583391733981-84963fa84af2?auto=format&fit=crop&w=640&q=80",
    },
    {
      number: 2,
      icon: Search,
      title: "Pilih Kebaya & Chat Admin",
      description: "Diskusikan Detail & Ketersediaan",
      image:
        "https://images.unsplash.com/photo-1617551307538-c9cdb9d71289?auto=format&fit=crop&w=640&q=80",
    },
    {
      number: 3,
      icon: CalendarCheck2,
      title: "Jadwalkan Pengukuran",
      description: "Layanan Fitting Pribadi",
      image:
        "https://images.unsplash.com/photo-1610049714749-4796f099b6b8?auto=format&fit=crop&w=640&q=80",
    },
    {
      number: 4,
      icon: Sparkles,
      title: "Ambil Kebaya Anda",
      description: "Tampil Sempurna di Acara",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80",
    },
  ];

  return (
    <motion.section
      className="bg-[#2b0f17] pb-26 pt-16"
      id="cara-sewa"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.h2
          className="mb-10 text-center font-serif text-3xl tracking-tight text-[#d8bc77] sm:text-4xl md:pb-16 md:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Bagaimana Cara Sewa?
        </motion.h2>

        <div className="relative">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: 0.2 + index * 0.09, duration: 0.4 }}
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-[62%] top-8 z-0 hidden h-[3px] w-[80%] bg-[#d8bc77]/55 md:block" />
                )}

                <div className="relative z-10 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#d8bc77]/80 bg-[#2b0f17] ring-1 ring-[#d8bc77]/20 md:h-20 md:w-20">
                    <step.icon className="h-6 w-6 text-[#d8bc77] md:h-7 md:w-7" />
                  </div>
                  <div className="absolute left-1/2 top-[-12px] flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#8f6d34] bg-[#d8bc77] text-sm font-bold text-[#2b0f17] md:top-[-14px] md:h-9 md:w-9 md:text-base">
                    {step.number}
                  </div>

                  <div className="mb-3 mt-12 hidden overflow-hidden rounded-md border-[3px] border-[#d7be84] bg-[#efe3cb] md:block">
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="aspect-square w-full object-cover"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <h3 className="mb-1 mt-4 font-serif text-base leading-tight text-[#f2e6cf] md:mt-8 md:text-2xl md:leading-[1.03]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-serif text-sm leading-tight text-[#d8bc77] md:mt-6 md:text-base md:leading-[1.02]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
