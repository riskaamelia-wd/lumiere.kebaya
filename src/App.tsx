import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { FeaturedCatalog } from "./components/FeaturedCatalog";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";
import { HowToRent } from "./components/HowToRent";
import { motion } from "framer-motion";
import ornamenSudutImage from "./assets/ornamen_atas.png";

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

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#2a0f17]">
      <img
        src={ornamenSudutImage}
        alt="Ornamen sudut kanan atas"
        className="pointer-events-none fixed right-0 top-0 z-20 w-[clamp(4.5rem,10vw,8rem)] opacity-80"
      />
      <img
        src={ornamenSudutImage}
        alt="Ornamen sudut kiri atas"
        className="pointer-events-none fixed left-0 top-0 z-20 w-[clamp(4.5rem,10vw,8rem)] scale-x-[-1] opacity-80"
      />
      <img
        src={ornamenSudutImage}
        alt="Ornamen sudut kanan bawah"
        className="pointer-events-none fixed bottom-0 right-0 z-20 w-[clamp(4.5rem,10vw,8rem)] scale-y-[-1] opacity-80"
      />
      <img
        src={ornamenSudutImage}
        alt="Ornamen sudut kiri bawah"
        className="pointer-events-none fixed bottom-0 left-0 z-20 w-[clamp(4.5rem,10vw,8rem)] scale-x-[-1] scale-y-[-1] opacity-80"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-3 py-2 md:px-4 md:py-3">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(0)}
        >
          <Navigation />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(1)}
        >
          <Hero />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(2)}
        >
          <FeaturedCatalog />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(3)}
        >
          <HowToRent />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(4)}
        >
          <About />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(5)}
        >
          <Testimonials />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
          transition={sectionTransition(6)}
        >
          <Footer />
        </motion.section>
      </div>
    </div>
  );
}
