import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { FeaturedCatalog } from "./components/FeaturedCatalog";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";
import { HowToRent } from "./components/HowToRent";
import { motion } from "framer-motion";
import ornamenSudutImage from "./assets/ornamen_atas.png";

const PAGE_FRAME =
  "mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20";

const BACKGROUND_SPARKLES = Array.from({ length: 64 }, (_, i) => {
  const x = ((i * 37 + 11) % 94) + 3;
  const y = ((i * 53 + 19) % 91) + 4;
  const size = 2 + (i % 5);
  const delay = (i * 0.13) % 2.6;
  const duration = 1.5 + ((i * 11) % 10) * 0.12;
  const kind = i % 6 === 0 ? "star" : i % 6 === 3 ? "soft" : "dot";
  return { x, y, size, delay, duration, kind };
});

export default function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionTransition = (index: number) => ({
    duration: 0.5,
    ease: "easeOut" as const,
    delay: index * 0.1,
  });

  const ornamenPulse = {
    scale: [1, 1.14, 1],
    opacity: [0.72, 0.92, 0.72],
  };

  const ornamenPulseTransition = (phase: number) => ({
    duration: 2.8,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: phase,
  });

  const ornamenSize = "w-[clamp(4.5rem,10vw,8rem)]";

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#2a0f17]">
      <div
        className="pointer-events-none fixed inset-0 z-8 overflow-hidden"
        aria-hidden
      >
        {BACKGROUND_SPARKLES.map((s, i) => {
          const twinkle = {
            opacity: s.kind === "soft" ? [0.08, 0.38, 0.08] : [0.2, 0.88, 0.2],
            scale: s.kind === "soft" ? [1, 1.4, 1] : [0.65, 1.18, 0.65],
          };
          const pos = { left: `${s.x}%`, top: `${s.y}%` };
          if (s.kind === "star") {
            return (
              <motion.span
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 leading-none text-[#f0deb8] drop-shadow-[0_0_6px_rgba(232,212,168,0.65)]"
                style={{ ...pos, fontSize: `${s.size + 6}px` }}
                animate={{
                  ...twinkle,
                  rotate: [0, 18, 0],
                }}
                transition={{
                  duration: s.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: s.delay,
                }}
              >
                ✦
              </motion.span>
            );
          }
          const glow = s.kind === "soft";
          const px = glow ? s.size * 5 : s.size;
          return (
            <motion.span
              key={i}
              className={
                glow
                  ? "absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a961]/40 blur-[2px]"
                  : "absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5e6bc] shadow-[0_0_6px_rgba(245,230,188,0.55)]"
              }
              style={{
                ...pos,
                width: `${px}px`,
                height: `${px}px`,
              }}
              animate={twinkle}
              transition={{
                duration: s.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: s.delay,
              }}
            />
          );
        })}
      </div>

      <div
        className={`pointer-events-none fixed right-0 top-0 z-20 ${ornamenSize}`}
        aria-hidden
      >
        <motion.img
          src={ornamenSudutImage}
          alt=""
          className="w-full origin-top-right opacity-80"
          animate={ornamenPulse}
          transition={ornamenPulseTransition(0)}
        />
      </div>
      <div
        className={`pointer-events-none fixed left-0 top-0 z-20 ${ornamenSize} scale-x-[-1]`}
        aria-hidden
      >
        <motion.img
          src={ornamenSudutImage}
          alt=""
          className="w-full origin-top-right opacity-80"
          animate={ornamenPulse}
          transition={ornamenPulseTransition(0.35)}
        />
      </div>
      <div
        className={`pointer-events-none fixed bottom-0 right-0 z-20 ${ornamenSize} scale-y-[-1]`}
        aria-hidden
      >
        <motion.img
          src={ornamenSudutImage}
          alt=""
          className="w-full origin-top-right opacity-80"
          animate={ornamenPulse}
          transition={ornamenPulseTransition(0.7)}
        />
      </div>
      <div
        className={`pointer-events-none fixed bottom-0 left-0 z-20 ${ornamenSize} scale-x-[-1] scale-y-[-1]`}
        aria-hidden
      >
        <motion.img
          src={ornamenSudutImage}
          alt=""
          className="w-full origin-top-right opacity-80"
          animate={ornamenPulse}
          transition={ornamenPulseTransition(1.05)}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-60 mx-auto max-w-6xl border-b border-[#c9a961]/10 bg-[#2a0f17]/45 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.35)] backdrop-blur-[2px]">
        <div className={`py-3 md:py-1.5`}>
          <Navigation />
        </div>
      </header>

      <div aria-hidden className="shrink-0 pt-36 md:pt-25" />

      <div className={`relative z-10 ${PAGE_FRAME} pb-6 pt-2 md:pb-8 md:pt-3`}>
        <motion.div
          className="[&_.hero-intro]:px-6 [&_.hero-intro]:py-8 md:[&_.hero-intro]:px-10 md:[&_.hero-intro]:py-10 lg:[&_.hero-intro]:py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(0)}
        >
          <Hero />
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(1)}
        >
          <FeaturedCatalog />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(2)}
        >
          <HowToRent />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(3)}
        >
          <About />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(4)}
        >
          <Testimonials />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(5)}
        >
          <Footer />
        </motion.section>
      </div>
    </div>
  );
}
