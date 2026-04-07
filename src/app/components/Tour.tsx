import { motion } from "motion/react";

export function Tour() {
  const tourDates = [
    {
      date: "April 15, 2026",
      city: "Lagos",
      venue: "Eko Convention Center",
      country: "Nigeria",
      status: "on-sale",
      color: "#00f0ff",
    },
    {
      date: "April 22, 2026",
      city: "Accra",
      venue: "Accra Sports Stadium",
      country: "Ghana",
      status: "on-sale",
      color: "#10ff10",
    },
    {
      date: "May 1, 2026",
      city: "London",
      venue: "O2 Arena",
      country: "United Kingdom",
      status: "on-sale",
      color: "#ffd700",
    },
    {
      date: "May 8, 2026",
      city: "New York",
      venue: "Madison Square Garden",
      country: "USA",
      status: "selling-fast",
      color: "#ff10f0",
    },
    {
      date: "May 15, 2026",
      city: "Los Angeles",
      venue: "The Forum",
      country: "USA",
      status: "on-sale",
      color: "#00f0ff",
    },
    {
      date: "May 22, 2026",
      city: "Toronto",
      venue: "Scotiabank Arena",
      country: "Canada",
      status: "on-sale",
      color: "#10ff10",
    },
    {
      date: "May 29, 2026",
      city: "Paris",
      venue: "AccorHotels Arena",
      country: "France",
      status: "sold-out",
      color: "#ffd700",
    },
    {
      date: "June 5, 2026",
      city: "Berlin",
      venue: "Mercedes-Benz Arena",
      country: "Germany",
      status: "on-sale",
      color: "#ff10f0",
    },
  ];

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "on-sale":
        return "Tickets Available";
      case "selling-fast":
        return "Selling Fast";
      case "sold-out":
        return "Sold Out";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-sale":
        return "#10ff10";
      case "selling-fast":
        return "#ffd700";
      case "sold-out":
        return "#666666";
      default:
        return "#00f0ff";
    }
  };

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
            <span className="bg-gradient-to-r from-[#10ff10] via-[#ffd700] to-[#ff10f0] bg-clip-text text-transparent">
              World Tour 2026
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Coming Soon - Catch me live in a city near you.
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#10ff10] via-[#ffd700] to-[#ff10f0] blur-3xl opacity-20" />
            <div className="relative p-16 bg-[#0a0a0a] border border-white/10 rounded-2xl">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#10ff10] to-[#ffd700] flex items-center justify-center">
                <span className="text-4xl">🎤</span>
              </div>
              <h2 className="text-4xl sm:text-5xl mb-4">
                <span className="bg-gradient-to-r from-[#10ff10] to-[#ffd700] bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                Tour dates and ticket information will be announced soon. Stay tuned for updates!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
