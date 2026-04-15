import gymImg from "@/assets/RMT Fitness Club in urban setting.png";

const GymShowcase = () => {
  return (
    <section className="w-full relative">

      {/* Image */}
      <img
        src={gymImg}
        alt="RMT Fitness Club Building"
        className="w-full h-[400px] md:h-[500px] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
          RMT FITNESS CLUB
        </h2>
        <h3 className="text-white text-2xl md:text-1xl font-bold mb-4">
          Thube Business Center
        </h3>

        <p className="text-gray-300 text-sm md:text-lg max-w-2xl">
          Premium 14,000 sq. ft. fitness facility with world-class equipment,
          expert trainers, and a motivating environment to transform your lifestyle.
        </p>

      </div>

    </section>
  );
};

export default GymShowcase;