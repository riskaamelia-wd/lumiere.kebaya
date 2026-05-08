import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h2
        className="mb-7 text-center font-serif text-3xl tracking-tight text-[#d8bc77] sm:text-4xl md:text-5xl"
        // className="mb-7 text-center font-serif text-4xl text-[#c4a457] "
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        Tentang Lumière Kebaya
      </motion.h2>
      <motion.section
        className="bg-[#efe3cb] pb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ delay: 0.2, duration: 0.45 }}
      >
        <div className="w-full">
          <div className="mb-7 grid gap-4 md:grid-cols-2">
            <motion.div
              className="overflow-hidden border border-[#d8bc77]/70 shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.28, duration: 0.45 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1653924854699-48619575e9c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWJheWElMjBmaXR0aW5nJTIwdGFpbG9yfGVufDF8fHx8MTc3NTU1OTMyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kebaya Fitting Service"
                className="h-52 w-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              className="overflow-hidden border border-[#d8bc77]/70 shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.35, duration: 0.45 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1769420319639-f47634a71dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWNlJTIwZW1icm9pZGVyeSUyMGRldGFpbHxlbnwxfHx8fDE3NzU1NTkzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lace Embroidery Detail"
                className="h-52 w-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.42, duration: 0.45 }}
          >
            <h3 className="mb-4 font-serif text-2xl italic text-[#c4a457] sm:text-3xl md:text-4xl">
              Kisah Keanggunan Lumière
            </h3>
            <p className="mb-5 leading-relaxed text-[#533231]">
              Koleksi kebaya Lumière didesain untuk menghadirkan keanggunan
              abadi dengan sentuhan modern. Kami hadir untuk mereka yang
              berselera resepsi yang mewah, atau lamaran yang khidmat.
            </p>
            <motion.button
              className="rounded-full bg-[#2d1419] px-6 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#e3c680] transition-colors hover:bg-[#4d2b27]"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Baca Lebih Lanjut
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
