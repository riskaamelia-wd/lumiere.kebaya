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
    <section className="bg-[#2b0f17] pb-26 pt-16" id="cara-sewa">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-10 text-center font-serif text-5xl  md:pb-16 tracking-tight text-[#d8bc77]">
          Bagaimana Cara Sewa?
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-12  ">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-[62%] top-8 z-0 hidden h-[3px] w-[80%] bg-[#d8bc77]/55 md:block" />
              )}

              <div className="relative z-10 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#d8bc77]/80 bg-[#2b0f17] ring-1 ring-[#d8bc77]/20">
                  <step.icon className="h-7 w-7 text-[#d8bc77]" />
                </div>
                <div className="absolute left-1/2 top-[-14px] flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-[#8f6d34] bg-[#d8bc77] text-base font-bold text-[#2b0f17]">
                  {step.number}
                </div>

                <div className="mb-3 mt-12 overflow-hidden border-[3px] border-[#d7be84] bg-[#efe3cb] rounded-md">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 mt-8 font-serif text-2xl leading-[1.03] text-[#f2e6cf]">
                  {step.title}
                </h3>
                <p className="font-serif mt-6 leading-[1.02] text-[#d8bc77]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
