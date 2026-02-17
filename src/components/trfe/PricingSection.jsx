import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Clock, Sun, Moon, Sunrise } from 'lucide-react';
import { mobilenumber } from '@/constant';

const timeSlots = [
  { period: 'Morning', time: '5:00 AM - 10:00 AM', icon: Sunrise, price: '₹800/hr', popular: false },
  { period: 'Afternoon', time: '10:00 AM - 5:00 PM', icon: Sun, price: '₹1000/hr', popular: false },
  { period: 'Evening', time: '5:00 PM - 9:00 PM', icon: Clock, price: '₹1500/hr', popular: true },
  { period: 'Night', time: '9:00 PM - 11:30 PM', icon: Moon, price: '₹1200/hr', popular: false },
];

const packages = [
  { name: 'Single Session', description: 'Perfect for casual play', features: ['1 Hour Slot', 'Equipment Available', 'Changing Room Access'], price: 'From ₹800' },
  { name: 'Weekly Pass', description: 'For regular players', features: ['7 Sessions', '10% Discount', 'Priority Booking', 'Free Parking'], price: '₹6,000', popular: true },
  { name: 'Monthly Pass', description: 'Best value for teams', features: ['30 Sessions', '25% Discount', 'VIP Booking', 'Team Locker', 'Free Refreshments'], price: '₹20,000' },
];

export default function PricingSection() {
  const whatsappLink = `https://wa.me/91${mobilenumber}?text=Hi%20Turf & Treat!%20I'd%20like%20to%20know%20more%20about%20pricing.`;

  return (
    <section id="pricing" className="py-24 px-4 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00ff88] text-sm font-semibold tracking-[0.2em] uppercase">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Flexible Booking Options
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Choose from hourly slots or save with our value packages
          </p>
        </motion.div>

        {/* Time Slots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Hourly Rates</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timeSlots.map((slot, index) => (
              <motion.div
                key={slot.period}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative p-5 rounded-2xl border transition-all duration-300 ${
                  slot.popular 
                    ? 'bg-gradient-to-b from-[#00ff88]/10 to-transparent border-[#00ff88]/30' 
                    : 'bg-[#1a1a1a] border-white/5 hover:border-white/10'
                }`}
              >
                {slot.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold bg-[#00ff88] text-black rounded-full">
                    Peak Hours
                  </span>
                )}
                <slot.icon className={`w-8 h-8 mb-3 ${slot.popular ? 'text-[#00ff88]' : 'text-gray-400'}`} />
                <h4 className="text-white font-bold">{slot.period}</h4>
                <p className="text-gray-500 text-sm mb-2">{slot.time}</p>
                <p className={`text-xl font-bold ${slot.popular ? 'text-[#00ff88]' : 'text-white'}`}>
                  {slot.price}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                pkg.popular 
                  ? 'bg-gradient-to-b from-[#00ff88]/10 via-[#1a1a1a] to-[#1a1a1a] border-[#00ff88]/30 scale-105' 
                  : 'bg-[#1a1a1a] border-white/5 hover:border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-gray-400 mb-6">{pkg.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{pkg.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#00ff88]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  className={`w-full py-6 font-bold rounded-xl transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}