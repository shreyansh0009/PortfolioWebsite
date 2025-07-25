import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { TESTIMONIALS } from "../constants";

export default function Testimonials() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-100%",
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop(); // pause scroll
  };

  const handleMouseLeave = () => {
    controls.start({
      x: "-100%",
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <div className="relative overflow-hidden mt-10 py-10 bg-transparent text-stone-300 w-full">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-15 text-center text-4xl"
      >
        What people says
      </motion.h2>

      {/* Left gradient */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#0a0a0a]/90 to-transparent z-10 pointer-events-none" />

      {/* Right gradient */}
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#0a0a0a]/90 to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden w-full">
        <motion.div
          className="flex flex-nowrap w-max px-10 gap-6"
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm bg-stone-900/80 p-6 mx-3 rounded-lg shadow-md"
            >
              <p className="italic mb-4">"{t.message}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-stone-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
