import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import aboutImg from "@/assets/aboutsir.png";
import { Award, Users, Flame } from "lucide-react";

const highlights = [
  { icon: Award, title: "Experience", desc: "Years of fitness expertise" },
  { icon: Flame, title: "Atmosphere", desc: "Energetic & motivating" },
  { icon: Users, title: "Community", desc: "Supportive fitness family" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-[#060b18]">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="w-full h-[300px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl bg-[#0f172a]">
            
            <img
              src={aboutImg}
              alt="Training at RMT Fitness"
              className="w-full h-full object-cover object-[center_10%]"
            />

            {/* Rating Badge */}
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-blue-600 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg text-xs md:text-sm">
              <span>4.9</span>
              <span>⭐</span>
              <span>Rated</span>
            </div>

          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl mb-4 md:mb-6 text-white">
            ABOUT <span className="text-blue-500">US</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            RMT Fitness Club is a premium fitness center spanning over 14,000 sq. ft., located in Thube Business Center. Equipped with world-class facilities and guided by expert trainers, we provide a motivating and results-driven environment. Our mission is to help individuals achieve their fitness goals and transform their lives through dedication, discipline, and the right support.
          </p>

          {/* Highlights */}
          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="
                  text-center 
                  bg-[#0f172a] 
                  p-4 md:p-5 
                  rounded-xl 
                  border border-white/10 
                  hover:scale-105 
                  hover:shadow-blue-500/10 
                  transition
                "
              >
                <h.icon className="mx-auto text-blue-400 mb-2 md:mb-3" size={24} />

                <p className="text-white text-xs sm:text-sm font-semibold">
                  {h.title}
                </p>

                <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;