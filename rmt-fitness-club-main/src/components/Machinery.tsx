import { motion } from "framer-motion";
import { useState } from "react";

// ✅ Optimized Cloudinary Images (q_auto + f_auto added)
const images = [
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-31_qi4trq.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-17_tvfjls.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-28_ikhjxz.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-29_rvswcg.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-30_vn1aoa.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-16_u3gcmc.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-15_aa06pc.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-14_f2zeqc.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-27_ydukpx.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-13_ariyyr.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-26_uxechb.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-25_wydxgc.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-23_sz6z60.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-22_t6hb9a.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-24_fpygkp.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-12_lv4xq3.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-11_xiyi9g.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-10_nfwckq.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-1_nsuugt.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-18_qnhwtw.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-19_s9jklq.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-9_pmq0rw.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-21_huupub.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-8_nafbr3.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-20_mxk2wc.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-32_asp9tb.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-5_n5v7js.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-7_bcqpl7.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-2_mfejqt.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-6_dcybqj.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-3_m9dqb2.jpg",
  "https://res.cloudinary.com/dnsxrl4ta/image/upload/q_auto,f_auto/gallery-4_ibpew4.jpg"
];

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? images : images.slice(0, 8);

  return (
    <section id="gallery" className="py-24 px-4 bg-[#060b18]">
      <div className="container mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-6xl text-center text-white mb-16"
        >
          Premium <span className="text-blue-500">Machinery</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {visibleImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative overflow-hidden rounded-xl border border-white/10 group"
            >
              <img
                src={src}
                srcSet={`
                  ${src.replace('/upload/', '/upload/w_300/')} 300w,
                  ${src.replace('/upload/', '/upload/w_600/')} 600w,
                  ${src.replace('/upload/', '/upload/w_900/')} 900w
                `}
                sizes="(max-width: 768px) 50vw, 25vw"
                alt={`RMT Fitness machinery ${i + 1}`}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                fetchPriority={i < 4 ? "high" : "auto"}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Glow border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/40 rounded-xl transition" />
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
