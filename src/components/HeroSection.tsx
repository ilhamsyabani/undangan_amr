import { motion } from "framer-motion"; // Pastikan import dari framer-motion atau motion/react
import { Heart } from "lucide-react";
import backround from "../assets/backround.webp";
import bunga from "../assets/bunga.png";

export function HeroSection() {
  // Animasi untuk daun-daun agar terlihat melayang lembut
  const leafAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 0.6,
      scale: 1,
      y: [0, 15, 0],
      rotate: [0, 5, 0],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdfbf7]">
      {/* 1. Background Texture Utama (Opsional: Tekstur Kertas) */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url(${backround})`,
        }}
      ></div>

      {/* 5. Konten Utama */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto bg-white/30 backdrop-blur-[2px] py-24 px-24 rounded-2 shadow-2xl shadow-sage-200/50 border border-white/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-sage-500 to-sage-600 rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-white fill-current" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-sage-800 text-3xl font-serif mb-2 italic">
            بسم الله الرحمن الرحيم
          </p>
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            The Wedding of
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-6xl md:text-8xl font-serif text-gray-800 mb-6 drop-shadow-sm"
        >
          Abiyyu <span className="text-sage-500">&</span> Miftah
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1, delay: 1 }}
          className="h-px bg-sage-400 mx-auto mb-8"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-700 text-xl md:text-2xl font-light tracking-[0.2em]"
        >
          SABTU, 11 APRIL 2026
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-sage-400 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-1 bg-sage-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
