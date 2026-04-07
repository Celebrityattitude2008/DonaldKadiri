import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            <span className="bg-gradient-to-r from-[#00f0ff] via-[#10ff10] to-[#ffd700] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join the community and stay updated with exclusive content, early access to tickets, and more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Fan Community Signup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-white/10 p-8 h-full">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#00f0ff]/10 flex items-center justify-center mb-6">
                  <Mail size={32} className="text-[#00f0ff]" />
                </div>
                <h2 className="text-3xl mb-4">
                  <span className="text-white">Join the Donald's Community</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  Sign up for exclusive updates, behind-the-scenes content, and be the first to know about new releases and tour announcements.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f0ff] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f0ff] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-black/50 border border-white/20 accent-[#00f0ff]"
                    />
                    I want to receive tour updates
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-black/50 border border-white/20 accent-[#00f0ff]"
                    />
                    I want to receive new music notifications
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-black/50 border border-white/20 accent-[#00f0ff]"
                    />
                    I want to receive exclusive merch offers
                  </label>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-[#10ff10]/10 border border-[#10ff10] text-[#10ff10] text-center"
                  >
                    ✓ Thanks for joining the community!
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#00f0ff] text-black hover:bg-[#10ff10] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Join the Community
                  </button>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-white/10 p-8 h-full">
              <div className="mb-8">
                <h2 className="text-3xl mb-4">
                  <span className="text-white">Send a Message</span>
                </h2>
                <p className="text-gray-400">
                  Have a question or want to get in touch? Drop me a message and I'll get back to you.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#ffd700] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#ffd700] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#ffd700] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 border-2 border-[#ffd700] text-white hover:bg-[#ffd700] hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-[#0a0a0a] border border-white/10">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl text-white mb-2">Email</h3>
            <p className="text-gray-400">info@donaldkadiri.com</p>
          </div>

          <div className="text-center p-8 bg-[#0a0a0a] border border-white/10">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-xl text-white mb-2">Bookings</h3>
            <p className="text-gray-400">bookings@donaldkadiri.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
