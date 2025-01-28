'use client';

import { motion } from 'framer-motion';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] w-full h-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] w-full h-full" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Cube */}
        <motion.svg
          className="absolute top-1/4 -right-20 w-96 h-96 text-black/5"
          viewBox="0 0 100 100"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.path
            d="M50 10L90 30V70L50 90L10 70V30L50 10Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.svg>

        {/* Small Floating Cubes */}
        <motion.svg
          className="absolute top-1/3 left-20 w-32 h-32 text-black/10"
          viewBox="0 0 100 100"
          initial={{ y: 0 }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M50 20L70 30V50L50 60L30 50V30L50 20Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </motion.svg>

        {/* Wire Cube */}
        <motion.svg
          className="absolute bottom-1/4 left-1/3 w-64 h-64 text-black/20"
          viewBox="0 0 100 100"
          initial={{ scale: 0.8, rotate: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M30 30L70 30L70 70L30 70L30 30ZM30 30L50 10L90 30M70 30L90 30M70 70L90 70L90 30M30 70L50 90L90 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </motion.svg>

        {/* Abstract Lines */}
        <motion.svg
          className="absolute top-1/2 right-1/4 w-48 h-48 text-black/10"
          viewBox="0 0 100 100"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <path
            d="M10 40L90 40M10 60L90 60M40 10L40 90M60 10L60 90"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </motion.svg>

        {/* Rotating Ring */}
        <motion.svg
          className="absolute bottom-1/3 right-1/3 w-40 h-40 text-black/15"
          viewBox="0 0 100 100"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1,3"
          />
        </motion.svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90" />
    </div>
  );
}
