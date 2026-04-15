  import { motion } from "framer-motion";
  import { Phone, MapPin, Clock } from "lucide-react";
  import { useState } from "react";
  import { toast } from "sonner";
  import FeedbackForm from "./FeedbackForm";

  const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        toast.error("Please fill in all fields");
        return;
      }
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    };

    return (
      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl text-center mb-16"
          >
            Get In <span className="text-gradient-brand">Touch</span>
          </motion.h2>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto items-center">

            {/* LEFT SIDE (NOW VISIBLE ✅) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
  >     
       <div className="flex gap-4 items-start group transition">
  
  {/* Icon / Avatar */}
  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition">
    {/* You can replace with image */}
    <span className="text-blue-500 font-bold text-lg">M</span>
  </div>

  {/* Content */}
  <div>
    <h3 className="text-lg font-body text-white mb-1 tracking-wide">
      Owner
    </h3>

    <p className="text-gray-400 text-sm hover:text-blue-400 transition">
      Manish Thube
    </p>
  </div>

</div>
        {/* Location */}
        <div className="flex gap-4 items-start group transition">
          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition">
            <MapPin className="text-blue-500" size={22} />
          </div>
          
          <div>
            <h3 className="text-lg font-body text-white mb-1 tracking-wide">
              Our Location
            </h3>
            <p className="text-gray-400 text-sm">
              Thube Business Center, Kedgaon, Ahilyanagar
            </p>
          </div>
        </div>
      
        {/* Phone */}
        <div className="flex gap-4 items-start group transition">
          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition">
            <Phone className="text-blue-500" size={22} />
          </div>
          <div>
            <h3 className="text-lg font-body text-white mb-1 tracking-wide">
              Phone
            </h3>
            <a href="tel:09075156599" className="text-gray-400 text-sm hover:text-blue-400 transition">
              090 7515 6599
            </a>
            <a href="tel: 07208080815" className="text-gray-400 text-sm hover:text-blue-400 transition">
              07208080815
            </a>
          </div>
        </div>
      
        {/* Hours */}
        <div className="flex gap-4 items-start group transition">
          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition">
            <Clock className="text-blue-500" size={22} />
          </div>
          <div>
            <h3 className="text-lg font-body text-white mb-1 tracking-wide">
              Working Hours
            </h3>
            <p className="text-gray-400 text-sm">Mon – Sat: 6 AM – 10 PM</p>
            <p className="text-gray-400 text-sm">Sunday: 7 AM – 12 PM</p>
          </div>
        </div>
        </motion.div>

            {/* RIGHT SIDE (MAP) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  title="RMT Fitness Location"
                  src="https://www.google.com/maps?q=Thube+Business+Center+Ahmednagar&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </motion.div>

          </div>

          {/* 🔥 FEEDBACK SECTION (CENTERED) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col items-center"
          >
            <div className="text-center mb-10">
              <p  id="feedback" className="text-primary  text-white  text-lg">USER REVIEWS</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                Share Your <span className="text-gradient">Experience</span>
              </h2>
            </div>

            <div className="w-full max-w-md mx-auto">
              <div className="bg-card p-6 rounded-xl border border-border shadow-lg">
                <FeedbackForm />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    );
  };

  export default ContactSection;
