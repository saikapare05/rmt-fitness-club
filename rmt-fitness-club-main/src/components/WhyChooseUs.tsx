import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, GraduationCap, Smile, Star, Sparkles } from "lucide-react";

const reasons = [
  { icon: Settings, title: "Modern Equipment", desc: "Top-tier machines for every workout" },
  { icon: GraduationCap, title: "Certified Trainers", desc: "Expert guidance at every step" },
  { icon: Smile, title: "Friendly Environment", desc: "Feel at home from day one" },
  { icon: Star, title: "High Ratings (4.9⭐)", desc: "Loved by hundreds of members" },
  { icon: Sparkles, title: "Clean & Hygienic", desc: "Spotless facility, always" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading tracking-[0.2em] text-sm mb-2">THE RMT ADVANTAGE</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * i }}
              className="group text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <r.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={30} />
              </div>
              <h3 className="font-heading text-sm font-semibold mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-xs">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;