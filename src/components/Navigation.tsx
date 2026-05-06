import logoImage from "../assets/logo.png";

export function Navigation() {
  return (
    <nav className="relative pt-2 md:pt-3">
      <div className="mx-auto w-full max-w-5xl   bg-[#2b0f17] py-6 ">
        <div className="mb-5 flex justify-center">
          <img
            src={logoImage}
            alt="Logo Lumiere Kebaya"
            className="h-[150px] w-auto object-contain md:h-[180px]"
          />
        </div>

        <div className="flex items-center justify-center gap-6 border-y border-[#c9a961]/35 py-3 text-sm md:gap-12">
          <a
            href="#home"
            className="hover:text-[#c9a961]/80 transition-colors text-[#d8bc77]"
          >
            Home
          </a>
          <a
            href="#katalog"
            className="hover:text-[#c9a961]/80 transition-colors text-[#d8bc77]"
          >
            Katalog
          </a>
          <a
            href="#cara-sewa"
            className="hover:text-[#c9a961]/80 transition-colors text-[#d8bc77]"
          >
            Cara Sewa
          </a>
          <a
            href="#kontak"
            className="hover:text-[#c9a961]/80 transition-colors text-[#d8bc77]"
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}
