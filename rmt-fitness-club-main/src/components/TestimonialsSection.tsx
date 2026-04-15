import { motion } from "framer-motion";
import FeedbackList from "./FeedbackList";

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-[#060b18]">
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 tracking-widest text-sm">
            TESTIMONIALS
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-white mt-2">
            WHAT MEMBERS <span className="text-blue-500">SAY</span>
          </h2>
        </motion.div>

        {/* 🔥 Centered Card Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <FeedbackList />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;