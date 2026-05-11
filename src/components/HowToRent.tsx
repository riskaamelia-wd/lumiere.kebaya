import {
  CalendarCheck2,
  Check,
  Clock,
  MessageCircle,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

type StepIllustration = "catalog" | "chat" | "detail" | "package" | "return";

function StepMockup({ type }: { type: StepIllustration }) {
  if (type === "catalog") {
    return (
      <div className="relative mx-auto h-36 w-24 rounded-[1.35rem] border-[5px] border-[#1b1011] bg-[#f4ead8] p-1 shadow-[0_18px_32px_-24px_rgba(0,0,0,0.9)]">
        <div className="mb-1 h-2 rounded-full bg-[#2b0f17]/15" />
        <div className="grid grid-cols-2 gap-1">
          {["#6f2132", "#e9ddc8", "#c7a568", "#3a1721"].map((color) => (
            <div
              key={color}
              className="h-12 rounded-md border border-[#2b0f17]/10"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className="relative mx-auto h-36 w-24 rounded-[1.35rem] border-[5px] border-[#1b1011] bg-[#102018] p-2 shadow-[0_18px_32px_-24px_rgba(0,0,0,0.9)]">
        <div className="mb-3 h-3 rounded-full bg-[#d8bc77]/35" />
        <div className="space-y-2">
          <div className="h-5 w-14 rounded-xl bg-[#f4ead8]/85" />
          <div className="ml-auto h-5 w-16 rounded-xl bg-[#5ac56d]" />
          <div className="h-5 w-12 rounded-xl bg-[#f4ead8]/85" />
          <div className="ml-auto h-5 w-14 rounded-xl bg-[#5ac56d]" />
        </div>
      </div>
    );
  }

  if (type === "detail") {
    return (
      <div className="relative mx-auto flex h-36 w-28 flex-col rounded-lg border border-[#7e6331]/45 bg-[#f4ead8] p-3 text-[#2b0f17] shadow-[0_18px_32px_-24px_rgba(0,0,0,0.9)]">
        <div className="absolute -top-2 left-1/2 h-5 w-14 -translate-x-1/2 rounded-md bg-[#b9914a]" />
        <p className="mb-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.12em]">
          Detail Sewa
        </p>
        {["Produk", "Ukuran", "Tanggal", "Durasi", "Total"].map((item) => (
          <div
            key={item}
            className="mb-1.5 flex items-center gap-2 text-[0.58rem]"
          >
            <Check className="h-3 w-3 text-[#7c5c26]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "package") {
    return (
      <div className="relative mx-auto h-34 w-34">
        <div className="absolute inset-x-4 bottom-2 h-24 rotate-[-8deg] rounded-xl bg-[#b78f52] shadow-[0_18px_32px_-24px_rgba(0,0,0,0.9)]" />
        <div className="absolute inset-x-2 bottom-0 h-24 rotate-[7deg] rounded-xl border border-[#d8bc77]/45 bg-[#7a2a35]" />
        <div className="absolute left-1/2 top-12 -translate-x-1/2 font-serif text-xl italic text-[#f6e7c2]">
          Lumière
        </div>
        <div className="absolute right-4 top-7 h-12 w-16 rotate-12 rounded-md bg-[#f4ead8] shadow-md" />
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-36 w-26">
      <div className="mx-auto h-8 w-8 rounded-full border border-[#d8bc77]/45 bg-[#6f2132]" />
      <div className="mx-auto mt-1 h-22 w-20 rounded-t-4xl border border-[#d8bc77]/45 bg-[#6f2132] shadow-[0_18px_32px_-24px_rgba(0,0,0,0.9)]">
        <div className="mx-auto mt-3 h-16 w-12 rounded-t-[1.4rem] border border-[#d8bc77]/25 bg-[radial-gradient(circle_at_50%_18%,rgba(216,188,119,0.65),transparent_9%),radial-gradient(circle_at_35%_35%,rgba(216,188,119,0.55),transparent_8%),radial-gradient(circle_at_68%_52%,rgba(216,188,119,0.55),transparent_8%)]" />
      </div>
      <div className="mx-auto h-4 w-14 border-x border-b border-[#d8bc77]/35" />
    </div>
  );
}

export function HowToRent() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Pilih Koleksi",
      description: "Jelajahi katalog dan temukan kebaya favorit Anda.",
      illustration: "catalog" as const,
    },
    {
      number: 2,
      icon: MessageCircle,
      title: "Konsultasi & Cek Ketersediaan",
      description: "Hubungi admin untuk ukuran dan tanggal sewa.",
      illustration: "chat" as const,
    },
    {
      number: 3,
      icon: Check,
      title: "Konfirmasi & Pembayaran",
      description: "Setujui detail sewa dan lakukan pembayaran.",
      illustration: "detail" as const,
    },
    {
      number: 4,
      icon: CalendarCheck2,
      title: "Pengiriman / Pengambilan",
      description: "Kebaya dikirim atau diambil sesuai jadwal.",
      illustration: "package" as const,
    },
    {
      number: 5,
      icon: Clock,
      title: "Gunakan & Kembalikan",
      description: "Nikmati momen spesial lalu kembalikan sesuai durasi.",
      illustration: "return" as const,
    },
  ];

  return (
    <motion.section
      className="relative flex min-h-screen items-center overflow-hidden py-8 md:min-h-0 md:py-14 lg:min-h-screen lg:pb-24 lg:pt-18"
      id="cara-sewa"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(216,188,119,0.12),transparent_38%),linear-gradient(180deg,rgba(43,15,23,0),rgba(43,15,23,0.46)_42%,rgba(43,15,23,0))]"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          className="mx-auto mb-6 max-w-2xl text-center md:mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8bc77]/75">
            Proses sewa mudah
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-[#f2e6cf] sm:text-4xl md:text-5xl">
            Bagaimana Cara Sewa?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#f2e6cf]/70 md:mt-4 md:text-base">
            Dari pilih koleksi sampai fitting, semua dibuat ringkas agar kebaya
            siap dipakai di hari spesial Anda.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-1/2 top-10 hidden h-px w-[76%] -translate-x-1/2 bg-linear-to-r from-transparent via-[#d8bc77]/45 to-transparent lg:block"
            aria-hidden
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: 0.2 + index * 0.09, duration: 0.4 }}
              >
                <div className="relative flex h-full items-center gap-3 overflow-hidden rounded-3xl border border-[#d8bc77]/20 bg-[#f2e6cf]/6 p-3 shadow-[0_18px_46px_-34px_rgba(0,0,0,0.85)] backdrop-blur-[1px] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#d8bc77]/45 group-hover:bg-[#f2e6cf]/8 lg:block">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d8bc77]/35 bg-[#2b0f17]/70 text-[#d8bc77] shadow-lg backdrop-blur lg:hidden">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#d8bc77]/35 bg-[#d8bc77]/20 text-xs font-bold text-[#d8bc77] lg:hidden">
                    {step.number}
                  </div>
                  <div className="relative hidden aspect-4/5 items-center justify-center overflow-hidden rounded-2xl border border-[#d8bc77]/35 bg-[radial-gradient(circle_at_50%_20%,rgba(216,188,119,0.18),transparent_45%),rgba(43,15,23,0.62)] lg:flex">
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <StepMockup type={step.illustration} />
                    </motion.div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#18080d]/72 via-transparent to-transparent"
                      aria-hidden
                    />
                    <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#d8bc77]/45 bg-[#2b0f17]/70 text-sm font-bold text-[#d8bc77] shadow-lg backdrop-blur">
                      {step.number}
                    </div>
                    <div className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#d8bc77]/35 bg-[#2b0f17]/70 backdrop-blur">
                      <step.icon className="h-5 w-5 text-[#d8bc77]" />
                    </div>
                  </div>
                  <div className="min-w-0 pr-8 text-left lg:px-2 lg:pb-2 lg:pt-4 lg:text-center">
                    <h3 className="font-serif text-base leading-[1.04] text-[#fff3d6] transition-colors duration-300 group-hover:text-[#f6e7c2] md:text-lg lg:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-medium leading-5 text-[#d8bc77]/85 lg:mt-3 lg:font-semibold lg:uppercase lg:tracking-[0.13em]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
