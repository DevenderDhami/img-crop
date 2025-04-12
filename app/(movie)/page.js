"use client";

import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";
import { BiSolidCameraMovie } from "react-icons/bi"
export default function Home() {
  return (
    <main className="min-h-[79vh] bg-background dark:bg-black text-foreground dark:text-white flex flex-col items-center justify-center px-6 text-center transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-themeGreen dark:text-gray-300"
      >
       <BiSolidCameraMovie size={100} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-themeGreen dark:text-gray-500"
      >
        We’re Rolling Soon!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl"
      >
        Filmwale is gearing up to bring you an unforgettable movie experience.
        Stay tuned for trailers, reviews, and cinematic magic!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-600 dark:text-gray-400 flex items-center gap-2 animate-pulse text-sm"
      >
        <FiClock size={16} />
        Coming to your screens soon
      </motion.div>
    </main>
  );
}
