import { Clock } from "lucide-react";
import heroImage from "../assets/4483e31538bb4162916892c7db3ae9fb3156e0a3.png";

export function Hero() {
  return (
    <section className="px-6 pb-7 pt-5 md:px-10" id="home">
      <div className="mx-auto max-w-5xl overflow-hidden border border-[#d8bc77]/40 bg-[#f0e3cc] shadow-xl">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <h2 className="mb-3 font-serif text-3xl leading-tight text-[#2c1417] md:text-5xl">
              Tampil Memukau di Hari Spesial: Wisuda, Resepsi, Lamaran
            </h2>
            <p className="mb-6 text-lg text-[#533231]">
              Koleksi Eksklusif Kebaya Mewah untuk Setiap Momen Berharga Anda
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#4d2b27] bg-[#2d1419] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#e5c67a] transition-colors hover:bg-[#4d2b27]"
            >
              <Clock className="w-5 h-5" />
              SEWA VIA WHATSAPP (FREE FITTING)
            </a>
          </div>
          <div className="relative h-full min-h-[280px]">
            <img
              src={heroImage}
              alt="Model wearing Lumière Kebaya"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
