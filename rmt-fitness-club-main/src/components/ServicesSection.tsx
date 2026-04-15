import { motion } from "framer-motion";
import { Dumbbell, Flame, TrendingUp, Apple, HeartPulse, Music, Shield, Activity, Sparkles } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    desc: "One-on-one sessions tailored to your goals with expert certified trainers."
  },
  {
    icon: Flame,
    title: "Weight Loss Programs",
    desc: "Structured programs combining cardio, HIIT, and nutrition for maximum fat burn."
  },
  {
    icon: TrendingUp,
    title: "Muscle Gain Programs",
    desc: "Progressive overload training designed to build lean muscle mass effectively."
  },
  {
    icon: Apple,
    title: "Diet & Nutrition Plans",
    desc: "Custom meal plans crafted by nutrition specialists to fuel your performance."
  },
  {
    icon: HeartPulse,
    title: "Yoga Training",
    desc: "Improve flexibility, balance, and mental peace with guided yoga sessions."
  },
  {
    icon: Music,
    title: "Zumba Classes",
    desc: "Fun, high-energy dance workouts that burn calories and boost your mood."
  },
  {
    icon: Shield,
    title: "Karate Training",
    desc: "Learn self-defense, discipline, and strength with professional karate coaching."
  },
  {
    icon: Activity,
    title: "Dance Fitness",
    desc: "Enjoy energetic dance sessions that improve stamina, coordination, and flexibility."
  },
  {
    icon: Sparkles,
    title: "Functional Training",
    desc: "Improve strength, mobility, and real-life movement performance with dynamic workouts."
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-4 bg-[#060b18]">
    <div className="container mx-auto">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-5xl md:text-6xl text-center text-white mb-16"
      >
        Our <span className="text-blue-500">Services</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="
              group 
              bg-[#0f172a] 
              border border-white/10 
              rounded-xl 
              p-8 
              text-center 
              hover:border-blue-500/40 
              hover:shadow-blue-500/10 
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            {/* Icon */}
            <div className="
              w-16 h-16 mx-auto mb-6 
              rounded-full 
              bg-blue-600/10 
              flex items-center justify-center 
              group-hover:bg-blue-600 
              group-hover:scale-110 
              transition
            ">
              <s.icon className="text-blue-400 group-hover:text-white" size={28} />
            </div>

            {/* Title */}
            <h3 className="font-heading text-xl text-white mb-3">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default ServicesSection;