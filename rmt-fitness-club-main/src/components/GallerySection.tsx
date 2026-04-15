import { motion } from "framer-motion";
import { useRef, useEffect, memo } from "react";

// ✅ Optimized Cloudinary URLs
const videos = [
  "https://res.cloudinary.com/dnsxrl4ta/video/upload/q_auto,f_auto/v1775961702/video1_ucqcsg.mp4",
  "https://res.cloudinary.com/dnsxrl4ta/video/upload/q_auto,f_auto/v1775961705/video2_bcdck2.mp4",
  "https://res.cloudinary.com/dnsxrl4ta/video/upload/q_auto,f_auto/v1775961725/video3_a2wdhx.mp4",
  "https://res.cloudinary.com/dnsxrl4ta/video/upload/q_auto,f_auto/v1775961740/video4_pzzz0i.mp4",
  "https://res.cloudinary.com/dnsxrl4ta/video/upload/q_auto,f_auto/v1775934779/video5_ypwu2k.mp4",
  "https://res.cloudinary.com/dnsxrl4ta/video/upload/q_auto,f_auto/v1775934772/video6_ns5vqq.mp4",
  "https://res.cloudinary.com/dnsxrl4ta/video/upload/q_auto,f_auto/v1775962157/video7_zwltnt.mp4",
  "https://res.cloudinary.com/dnsxrl4ta/video/upload/q_auto,f_auto/v1775934775/video9_frc17q.mp4",
];

// 🔥 Optimized Video Component (memoized)
const LazyVideo = memo(({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
    />
  );
});

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-4">
      <div className="container mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-6xl text-center text-white mb-16"
        >
          Our <span className="text-blue-500">Gallery</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-xl group relative"
            >
              <LazyVideo src={src} />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;