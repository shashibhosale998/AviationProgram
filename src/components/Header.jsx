// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      {/* Full-width section; inner container centers content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[80vh] lg:min-h-[90vh] pt-16 md:pt-8 pb-8 md:pb-12"
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-800 text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0 space-y-4 md:space-y-6 lg:space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl tracking-wide text-gray-500"
            >
              Data safety and security solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent leading-tight"
            >
              Total Xproguard Private Limited
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 max-w-2xl"
            >
              Xproguard is the global leader in mobile security solutions. We aim to
              provide our users with the utmost data safety and security. We
              understand that in today's digital world, mobile security is
              essential, and we strive to ensure that our users' data is secure.
            </motion.p>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
          >
            <div className="relative w-full max-w-[780px] px-4 md:px-0">
              {/* subtle background glow — contained so it won't overflow */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-blue-600/10 blur-3xl" />
              </div>

              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
                src="https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66dff18823771b205d3c065f_hero-image-01.svg"
                alt="Hero"
                className="relative z-10 w-full h-auto object-contain"
                style={{ maxHeight: 520 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
