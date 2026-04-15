import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="RMT Fitness gym interior"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-background/70" />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground leading-none mb-6"
      >Welcome to RMT Fitness Club</motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading text-5xl sm:text-7xl md:text-8xl text-foreground leading-none mb-6"
      >
        Transform Your Body,
        <br />
        <span className="text-gradient-brand">Transform Your Life</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        Join RMT Fitness Club – The Pride of Ahmednagar

      </motion.p>

    </div>
  </section>
);

export default HeroSection;
