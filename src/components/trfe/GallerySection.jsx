import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800', alt: 'Football Turf Night' },
  { url: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800', alt: 'Football Match' },
  { url: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800', alt: 'Stadium Lights' },
  { url: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800', alt: 'Football Players' },
  { url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800', alt: 'Cricket Practice' },
  { url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800', alt: 'Sports Facility' },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => setSelectedImage(null);

  const navigate = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-[#0f0f0f] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00ff88] text-sm font-semibold tracking-[0.2em] uppercase">Gallery</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Our Facility in Action
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-[#00ff88]/0 group-hover:border-[#00ff88]/50 rounded-2xl transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); navigate('next'); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); openLightbox(idx); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-[#00ff88] w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}