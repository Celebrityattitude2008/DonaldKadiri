import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="donald.jpg"
            alt="Music Artist"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
          
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block bg-gradient-to-r from-[#00f0ff] via-[#10ff10] to-[#ffd700] bg-clip-text text-transparent">
                Donald Kadiri
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Indie Gospel Artist • Content Producer • Aspiring Novelist
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="https://open.spotify.com/artist/4lerxp9jafgUw4Gi1aBgGJ?si=WxIXoYvSSJi-Fc-ZA3YtNQ"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#00f0ff] text-black overflow-hidden transition-all hover:scale-105 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Listen Now
                  <Play size={18} fill="currentColor" className="sm:w-5 sm:h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#10ff10] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#00f0ff] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#00f0ff] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">
              <span className="bg-gradient-to-r from-[#00f0ff] to-[#10ff10] bg-clip-text text-transparent">
                Latest Releases
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Stream my newest tracks on all platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "nostoppingus.jpg",
                title: "No Stopping Us",
                type: "Single",
              },
              {
                image: "stainless.jpg",
                title: "Stainless",
                type: "Single",
              },
              {
                image: "justusforever.jpg",
                title: "Just Us Forever",
                type: "Single",
              },
            ].map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-[#00f0ff] transition-all"
              >
                <ImageWithFallback
                  src={release.image}
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#00f0ff] text-sm mb-1">{release.type}</p>
                    <h3 className="text-2xl">{release.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
