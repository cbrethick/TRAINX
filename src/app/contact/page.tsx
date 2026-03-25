import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10" />
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have questions about our training plans? We're here to help you achieve your goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-gray-400">support@fitathlete.com</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-gray-400">1234567890</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-semibold">Our Headquarters</div>
                <div className="text-gray-400">SRM</div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/5 to-transparent">
            <h4 className="text-lg font-bold text-white mb-2">Office Hours</h4>
            <div className="flex justify-between text-gray-400 text-sm">
              <span>Monday - Friday</span>
              <span>8:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-400 text-sm mt-2">
              <span>Saturday - Sunday</span>
              <span>10:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/10">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
