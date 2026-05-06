import logoImage from "../assets/logo.png";
import ornamenImage from "../assets/ornamen.png";

export function Navigation() {
  return (
    <nav className="relative px-6 pt-6 md:px-10">
      <img
        src={ornamenImage}
        alt="Ornamen kiri"
        className="pointer-events-none absolute left-2 top-2 h-14 opacity-65"
      />
      <img
        src={ornamenImage}
        alt="Ornamen kanan"
        className="pointer-events-none absolute right-2 top-2 h-14 scale-x-[-1] opacity-65"
      />

      <div className="mx-auto max-w-5xl rounded-t-2xl border border-[#c9a961]/30 bg-[#2b0f17] px-4 py-6 shadow-[0_0_20px_rgba(0,0,0,0.25)]">
        <div className="mb-5 flex justify-center">
          <img
            src={logoImage}
            alt="Logo Lumiere Kebaya"
            className="h-[150px] w-auto object-contain md:h-[180px]"
          />
        </div>

        <div className="flex items-center justify-center gap-6 border-y border-[#c9a961]/35 py-3 text-sm md:gap-9">
          <a
            href="#home"
            className="text-[#f2e6cf] transition-colors hover:text-[#d8bc77]"
          >
            Home
          </a>
          <a
            href="#katalog"
            className="text-[#f2e6cf] transition-colors hover:text-[#d8bc77]"
          >
            Katalog
          </a>
          <a
            href="#cara-sewa"
            className="text-[#f2e6cf] transition-colors hover:text-[#d8bc77]"
          >
            Cara Sewa
          </a>
          <a
            href="#kontak"
            className="text-[#f2e6cf] transition-colors hover:text-[#d8bc77]"
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}
