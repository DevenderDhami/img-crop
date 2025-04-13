'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiFilm } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-[79vh] bg-background dark:bg-black text-foreground dark:text-white flex items-center justify-center px-6 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-lg"
      >
        <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
          <FiFilm size={48} />
        </div>
        <h1 className="text-4xl font-bold mb-4">404 - Blog Not Found</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Uh oh! The page you're looking for might have been cut from the final edit.
        </p>

        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 px-4 py-2 bg-themeGreen dark:bg-blue-600 hover:bg-themeBrown dark:hover:bg-blue-700 transition rounded-full text-white"
        >
          <FiArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
