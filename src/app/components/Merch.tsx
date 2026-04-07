import { motion } from "motion/react";

export function Merch() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl mb-4">
            <span className="bg-gradient-to-r from-[#ff10f0] via-[#ffd700] to-[#00f0ff] bg-clip-text text-transparent">
              Official Merch
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Coming Soon - Exclusive merchandise and collectibles.
          </p>
        </motion.div>

        {/* Coming Soon Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] via-[#10ff10] to-[#ffd700] blur-3xl opacity-20" />
            <div className="relative p-16 bg-[#0a0a0a] border border-white/10 rounded-2xl">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#10ff10] flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <h2 className="text-4xl sm:text-5xl mb-4">
                <span className="bg-gradient-to-r from-[#00f0ff] to-[#10ff10] bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                Stay tuned for exclusive merchandise featuring unique designs and limited edition collectibles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
