import { ImageWithFallback } from "./ImageWithFallback";
import ornamentImage from "../assets/ornamen.png";

const catalogItems = [
  {
    id: 1,
    title: "Kebaya Biru Mewah dengan Manik",
    image:
      "https://images.unsplash.com/photo-1698678461049-efc64b351763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZ5JTIwYmx1ZSUyMGtlYmF5YSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3NTU1OTMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Kebaya Maroon Elegan",
    image:
      "https://images.unsplash.com/photo-1592890934141-6f643e483a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJvb24lMjBidXJndW5keSUyMGtlYmF5YXxlbnwxfHx8fDE3NzU1NTkzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Kebaya Maroon Elegan",
    image:
      "https://images.unsplash.com/photo-1612957563110-b6a44133dfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGtlYmF5YSUyMGRyZXNzfGVufDF8fHx8MTc3NTU1OTMyMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Kebaya Biru Mewah dengan Manik",
    image:
      "https://images.unsplash.com/photo-1698678461049-efc64b351763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZ5JTIwYmx1ZSUyMGtlYmF5YSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3NTU1OTMyMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Kebaya Maroon Elegan",
    image:
      "https://images.unsplash.com/photo-1612957563110-b6a44133dfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGtlYmF5YSUyMGRyZXNzfGVufDF8fHx8MTc3NTU1OTMyMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Kebaya Maroon Elegan",
    image:
      "https://images.unsplash.com/photo-1592890934141-6f643e483a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJvb24lMjBidXJndW5keSUyMGtlYmF5YXxlbnwxfHx8fDE3NzU1NTkzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function FeaturedCatalog() {
  return (
    <section className="relative bg-[#2a0f17] pb-8 pt-10" id="katalog">
      <div className="mx-auto w-full max-w-5xl overflow-visible">
        <div className="relative h-0 overflow-visible">
          <img
            src={ornamentImage}
            alt="Ornamen katalog kiri"
            className="pointer-events-none absolute left-[-5rem] h-18 opacity-75"
          />
          <img
            src={ornamentImage}
            alt="Ornamen katalog kanan"
            className="pointer-events-none absolute right-[-5rem] h-18 scale-x-[-1] opacity-75"
          />
        </div>
        <div className="relative">
          <h2 className="text-center font-serif text-5xl tracking-tight  mb-8 text-[#d8bc77]">
            Katalog Unggulan
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-7 md:grid-cols-3 ">
          {catalogItems.map((item) => (
            <div
              key={item.id}
              className="group w-full overflow-hidden bg-transparent p-0 text-center transition-transform duration-300 ease-out hover:-translate-y-1 active:translate-y-0.5 *:rounded-md"
            >
              <div className="aspect-square overflow-hidden border-[3px] border-[#d7be84] bg-[#efe3cb] transition-all duration-300 ease-out group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)] group-active:scale-[0.985]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-active:scale-100"
                />
              </div>
              <div className="px-1 pb-1 pt-3">
                <h3 className="mb-3 font-serif text-xl leading-[1.05] text-[#f2e6cf] transition-colors duration-300 group-hover:text-[#f6e7c2]">
                  {item.title}
                </h3>
                <button className="rounded-full border border-[#8c6b2d] bg-[#d8bc77] px-5 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-[#2a0f17] transition-all duration-200 hover:bg-[#e8cd8d] hover:shadow-[0_6px_14px_rgba(0,0,0,0.28)] active:scale-95">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
