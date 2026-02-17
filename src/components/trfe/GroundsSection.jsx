import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { mobilenumber } from '@/constant';

const grounds = [
  {
    title: 'Football Turf',
    description: 'Premium synthetic grass, professional goal posts, floodlights for night games',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800',
    features: ['5-a-side & 7-a-side', 'LED Floodlights', 'Premium Turf'],
    accent: '#00ff88',
  },
  {
    title: 'Pickball Court',
    description: 'Regulation-size court with proper markings and quality surface',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800',
    features: ['Full-size Court', 'Pro Markings', 'Night Lighting'],
    accent: '#00d4ff',
  },
  {
    title: 'Cricket Net Practice',
    description: 'Multiple practice nets with bowling machines and coaching available',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800',
    features: ['Multiple Nets', 'Bowling Machine', 'Pro Coaching'],
    accent: '#ff6b00',
  },
];

export default function GroundsSection() {
  const whatsappLink = `https://wa.me/91${mobilenumber}?text=Hi%20Turf & Treat!%20I'd%20like%20to%20book%20a%20slot.`;

  return (
    <section id="grounds" className="py-24 px-4 bg-[#0f0f0f] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ff88]/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00ff88] text-sm font-semibold tracking-[0.2em] uppercase">Our Facilities</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            World-Class Grounds
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {grounds.map((ground, index) => (
            <motion.div
              key={ground.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden bg-[#1a1a1a] border border-white/5 hover:border-white/10 transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={ground.image}
                    alt={ground.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  
                  {/* Glow Effect */}
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ backgroundColor: ground.accent }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{ground.title}</h3>
                  <p className="text-gray-400 mb-5 text-sm">{ground.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ground.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button 
                      className="w-full py-5 font-semibold rounded-xl transition-all duration-300"
                      style={{ 
                        backgroundColor: ground.accent + '20',
                        color: ground.accent,
                        borderColor: ground.accent + '30',
                      }}
                    >
                      Book This Ground
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}