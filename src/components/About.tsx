export function About() {
  return (
    <section className="bg-[#efe3cb]">
      <div className="w-full">
        <h2 className="mb-7 text-center font-serif text-4xl text-[#2c1417]">
          Tentang Lumière Kebaya
        </h2>

        <div className="mb-7 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden border border-[#d8bc77]/70 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1653924854699-48619575e9c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWJheWElMjBmaXR0aW5nJTIwdGFpbG9yfGVufDF8fHx8MTc3NTU1OTMyMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Kebaya Fitting Service"
              className="h-52 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden border border-[#d8bc77]/70 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1769420319639-f47634a71dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWNlJTIwZW1icm9pZGVyeSUyMGRldGFpbHxlbnwxfHx8fDE3NzU1NTkzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Lace Embroidery Detail"
              className="h-52 w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-4 font-serif text-4xl italic text-[#c4a457]">
            Kisah Keanggunan Lumière
          </h3>
          <p className="mb-5 leading-relaxed text-[#533231]">
            Koleksi kebaya Lumière didesain untuk menghadirkan keanggunan abadi
            dengan sentuhan modern. Kami hadir untuk mereka yang berselera
            resepsi yang mewah, atau lamaran yang khidmat.
          </p>
          <button className="rounded-full bg-[#2d1419] px-6 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#e3c680] transition-colors hover:bg-[#4d2b27]">
            Baca Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
}
