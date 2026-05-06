import { BookOpen, CalendarCheck2, Search, Sparkles } from "lucide-react";

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
    <section className="bg-[#2b0f17]" id="cara-sewa">
      <div className="w-full">
        <h2 className="mb-8 text-center font-serif text-4xl text-[#d8bc77]">
          Bagaimana Cara Sewa?
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-[60%] top-6 z-0 hidden h-0.5 w-[85%] bg-[#d8bc77]/40 md:block" />
              )}

              <div className="relative z-10 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d8bc77] bg-[#2b0f17]">
                  <step.icon className="h-5 w-5 text-[#d8bc77]" />
                </div>
                <div className="absolute left-1/2 top-[-10px] flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#d8bc77] text-xs font-bold text-[#2b0f17]">
                  {step.number}
                </div>

                <div className="mb-2 overflow-hidden border border-[#d8bc77]/50">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-28 w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-sm leading-tight text-[#f2e6cf]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#d8bc77]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
