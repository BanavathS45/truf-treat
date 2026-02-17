import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Clock, Shield } from 'lucide-react';

const features = [
  { icon: Trophy, title: 'Professional Grade', desc: 'FIFA quality synthetic turf' },
  { icon: Users, title: 'All Skill Levels', desc: 'From beginners to pros' },
  { icon: Clock, title: '18+ Hours Daily', desc: 'Open 5 AM to 11:30 PM' },
  { icon: Shield, title: 'Safe & Secure', desc: 'Well-lit & monitored' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00ff88] text-sm font-semibold tracking-[0.2em] uppercase">About Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Where Champions Are Made
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Turf & Treat is Boduppal's premier sports facility, offering state-of-the-art 
            turf grounds for football, handball, and cricket. Our mission is to provide a 
            world-class playing experience for athletes of all levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-white/5 hover:border-[#00ff88]/30 transition-all duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-4 group-hover:bg-[#00ff88]/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-[#00ff88]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}