import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { mobilenumber } from '@/constant';

export default function ContactSection() {
  const whatsappLink = `https://playo.co/booking?venueId=45e17fe8-429a-410a-9a58-43bdf0623ccf`;

  return (
    <section id="contact" className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00ff88] rounded-full blur-[200px] opacity-10" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00d4ff] rounded-full blur-[200px] opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#00ff88] text-sm font-semibold tracking-[0.2em] uppercase">Ready to Play?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Book Your Slot Now
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Don't wait! Reserve your preferred time slot and get ready to dominate the field. 
            Quick booking via WhatsApp or call us directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
// @ts-ignore
              Button className="group px-10 py-7 text-lg font-bold bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black hover:shadow-[0_0_50px_rgba(0,255,136,0.5)] transition-all duration-300 rounded-full">
                <MessageCircle className="w-6 h-6 mr-2" />
                Booking Now
              </Button>
            </a>
           <a href={`tel:+91${mobilenumber}`}>
              <Button variant="outline" className="px-10 py-7 text-lg font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-full bg-transparent">
                <Phone className="w-6 h-6 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/turfandtreat_tnt/"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00ff88] hover:border-[#00ff88]/30 hover:bg-[#00ff88]/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/10 transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Turf & Treat . All rights reserved.</p>
          <p className="text-[#00ff88] font-semibold">Train Hard. Play Harder. Win Bigger.</p>
        </div>
      </div>
    </section>
  );
}