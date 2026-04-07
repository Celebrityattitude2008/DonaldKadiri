import { motion } from "motion/react";

export function Music() {
  const streamingPlatforms = [
    {
      name: "Spotify",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111624.png",
      color: "#10ff10",
      url: "https://open.spotify.com/artist/4lerxp9jafgUw4Gi1aBgGJ?si=WxIXoYvSSJi-Fc-ZA3YtNQ",
      description: "Stream on Spotify",
    },
    {
      name: "Apple Music",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/0/747.png",
      color: "#ff10f0",
      url: "https://music.apple.com/ng/artist/donald-kadiri/1802503371?ls",
      description: "Listen on Apple Music",
    },
    {
      name: "YouTube",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/3670/3670147.png",
      color: "#ffd700",
      url: "https://youtube.com/@donald_kadiri?si=LClQuD4p5tOfgpx6",
      description: "Watch on YouTube",
    },
    {
      name: "SoundCloud",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/408/408705.png",
      color: "#00f0ff",
      url: "https://on.soundcloud.com/4O1usHDfR383EwHaTa",
      description: "Play on SoundCloud",
    },
  ];

  const songs = [
    {
      title: "No Stopping Us",
      year: 2026,
      spotifyUrl: "https://open.spotify.com/track/2gQWHNAXGVcopgIyP3TfGC?si=4bb3e5182f484448",
      image: "/nostoppingus.jpg",
    },
    {
      title: "Stainless",
      year: 2025,
      spotifyUrl: "https://open.spotify.com/track/2373HSxTJ7Sui5WwgrZLan?si=2cb9480d430d44e1",
      image: "/stainless.jpg",
    },
    {
      title: "Just Us Forever",
      year: 2025,
      spotifyUrl: "https://open.spotify.com/track/6LqmARKtQppli72ooWrwD8?si=197c9c847af24f04",
      image: "/justusforever.jpg",
    },
  ];

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
            <span className="bg-gradient-to-r from-[#00f0ff] to-[#10ff10] bg-clip-text text-transparent">
              Music
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Listen to my latest tracks and albums on your favorite streaming platform
          </p>
        </motion.div>

        {/* Streaming Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-3xl text-center mb-12">
            <span className="text-white">Stream Now</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {streamingPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative p-4 sm:p-6 md:p-8 bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all overflow-hidden"
                style={{
                  boxShadow: `0 0 0 0 ${platform.color}00`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px 0 ${platform.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 0 ${platform.color}00`;
                }}
              >
                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-3 sm:gap-4">
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <img
                      src={platform.iconUrl}
                      alt={platform.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-base sm:text-lg md:text-xl text-white mb-1">{platform.name}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{platform.description}</p>
                    </div>
                  </div>
                  <span className="text-xl sm:text-2xl flex-shrink-0">→</span>
                </div>
                
                {/* Animated background gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${platform.color}00 0%, ${platform.color} 100%)`,
                  }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Latest Tracks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12">
            <span className="text-white">Latest Tracks</span>
          </h2>
          <div className="space-y-8 sm:space-y-12">
            {songs.map((song, index) => {
              const trackId = song.spotifyUrl.split('/track/')[1].split('?')[0];
              return (
                <motion.div
                  key={song.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 items-stretch lg:items-center"
                >
                  <div className="w-full lg:w-1/3">
                    <img
                      src={song.image}
                      alt={song.title}
                      className="w-full rounded-lg shadow-lg object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-2/3">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl text-white">{song.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{song.year}</p>
                    </div>
                    <iframe
                      data-testid="embed-iframe"
                      style={{ borderRadius: '12px' }}
                      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
