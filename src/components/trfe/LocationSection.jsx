import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mobilenumber } from '@/constant';

export default function LocationSection() {
const mapUrl =
"https://www.google.com/maps?q=17.400793,78.598090&output=embed";


 const directionsUrl = "https://maps.app.goo.gl/sL9hg9HBZhHGCKyF8";


  return (
    <section id="location" className="py-24 px-4 bg-[#0f0f0f] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00ff88] text-sm font-semibold tracking-[0.2em] uppercase">Location</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Find Us in Uppal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden h-[400px] border border-white/10"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Turf & Treat Turf Location"
            />
            <div className="absolute inset-0 pointer-events-none border-4 border-[#00ff88]/20 rounded-3xl" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#00ff88]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Address</h3>
                  <p className="text-gray-400">
                    Turf & Treat <br />
                    78/A, Near Uppal Bus Depot, Viharika Colony, Maruthi Nagar, Peerzadiguda, Hyderbad, Hyderabad, Telangana 500039
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Phone</h3>
                  <p className="text-gray-400">+91 ${mobilenumber}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#ff6b00]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email</h3>
                  <p className="text-gray-400">bookings@Turf&Treat.com</p>
                </div>
              </div>
            </div>

            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-8">
              <Button className="w-full py-6 text-lg font-bold bg-white/10 text-white hover:bg-white/20 rounded-xl flex items-center justify-center gap-2">
                <Navigation className="w-5 h-5" />
                Get Directions
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}