import React from 'react';
import HeroSection from '@/components/trfe/HeroSection';
import AboutSection from '@/components/trfe/AboutSection';
import GroundsSection from '@/components/trfe/GroundsSection';
import PricingSection from '@/components/trfe/PricingSection';
import GallerySection from '@/components/trfe/GallerySection';
import TimingsSection from '@/components/trfe/TimingsSection';
import LocationSection from '@/components/trfe/LocationSection';
import ContactSection from '@/components/trfe/ContactSection';
import FloatingWhatsApp from '@/components/trfe/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <HeroSection />
      <AboutSection />
      <GroundsSection />
      <PricingSection />
      <GallerySection />
      <TimingsSection />
      <LocationSection />
      <ContactSection />
      <FloatingWhatsApp />
    </div>
  );
}