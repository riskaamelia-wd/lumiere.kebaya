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
    <section className="relative bg-[#2a0f17] pb-6 pt-4" id="katalog">
      <img
        src={ornamentImage}
        alt="Ornamen katalog kiri"
        className="pointer-events-none absolute left-4 top-4 h-12 opacity-55 md:h-14"
      />
      <img
        src={ornamentImage}
        alt="Ornamen katalog kanan"
        className="pointer-events-none absolute right-4 top-4 h-12 scale-x-[-1] opacity-55 md:h-14"
      />

      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-8 text-center font-serif text-4xl text-[#d8bc77]">
          Katalog Unggulan
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {catalogItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden border border-[#d8bc77]/50 bg-[#2e151b] p-2 text-center shadow-lg"
            >
              <div className="aspect-4/5 overflow-hidden border border-[#d8bc77]/50">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="mb-3 text-base leading-tight text-[#f2e6cf]">
                  {item.title}
                </h3>
                <button className="rounded-full bg-[#d8bc77] px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2a0f17] transition-colors hover:bg-[#e8cd8d]">
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
