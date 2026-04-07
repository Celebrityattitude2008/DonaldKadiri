import { Instagram, Twitter, Youtube, Music, Apple, Cloud } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { iconUrl: "https://cdn-icons-png.flaticon.com/512/3046/3046126.png", href: "https://www.tiktok.com/@donald_kadiri?_r=1&_t=ZS-94Iq28wDOf2", label: "TikTok", color: "#ff10f0" },
    { iconUrl: "https://cdn-icons-png.flaticon.com/512/3955/3955024.png", href: "https://www.instagram.com/donaldkadiri0?igsh=MTI4bWUyc3Qyb2UxaA==", label: "Instagram", color: "#ff10f0" },
    { iconUrl: "https://cdn-icons-png.flaticon.com/512/3670/3670147.png", href: "https://youtube.com/@donald_kadiri?si=LClQuD4p5tOfgpx6", label: "YouTube", color: "#ffd700" },
    { iconUrl: "https://cdn-icons-png.flaticon.com/512/733/733579.png", href: "https://x.com/donald_kadiri", label: "X", color: "#00f0ff" },
    { iconUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111624.png", href: "https://open.spotify.com/artist/4lerxp9jafgUw4Gi1aBgGJ?si=WxIXoYvSSJi-Fc-ZA3YtNQ", label: "Spotify", color: "#10ff10" },
    { iconUrl: "https://cdn-icons-png.flaticon.com/512/0/747.png", href: "https://music.apple.com/ng/artist/donald-kadiri/1802503371?ls", label: "Apple Music", color: "#ff10f0" },
    { iconUrl: "https://cdn-icons-png.flaticon.com/512/408/408705.png", href: "https://on.soundcloud.com/4O1usHDfR383EwHaTa", label: "SoundCloud", color: "#00f0ff" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative"
                >
                  <div
                    className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity"
                    style={{ backgroundColor: social.color }}
                  />
                  <div
                    className="relative p-2 sm:p-2.5 md:p-3 rounded-full border-2 transition-all group-hover:scale-110"
                    style={{ borderColor: social.color }}
                  >
                    <img
                      src={social.iconUrl}
                      alt={social.label}
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2026 Donald Kadiri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
