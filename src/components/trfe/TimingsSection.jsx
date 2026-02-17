import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sun, Sunset, Moon } from 'lucide-react';

const schedule = [
  { icon: Sun, period: 'Early Morning', time: '5:00 AM - 8:00 AM', desc: 'Fresh air workouts' },
  { icon: Clock, period: 'Morning', time: '8:00 AM - 12:00 PM', desc: 'Perfect for practice' },
  { icon: Sunset, period: 'Afternoon', time: '12:00 PM - 5:00 PM', desc: 'Beat the heat indoors' },
  { icon: Moon, period: 'Evening & Night', time: '5:00 PM - 01:00 AM', desc: 'Under the lights' },
];

export default function TimingsSection() {
  return (
    <section id="timings" className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff88] rounded-full blur-[200px] opacity-5" />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00ff88] text-sm font-semibold tracking-[0.2em] uppercase">Operating Hours</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Open 18+ Hours Daily
          </h2>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20">
            <Clock className="w-6 h-6 text-[#00ff88]" />
            <span className="text-2xl font-bold text-[#00ff88]">5:00 AM — 01:00 AM</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-5 p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#00ff88]/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center group-hover:bg-[#00ff88]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#00ff88]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{item.period}</h3>
                  <p className="text-[#00ff88] font-semibold">{item.time}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 mt-10"
        >
          * Timings may vary on holidays. Contact us for special arrangements.
        </motion.p>
      </div>
    </section>
  );
}