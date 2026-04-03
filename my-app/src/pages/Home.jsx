import React from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/home/Header';
import HeroSection from '../components/home/HeroSection';
import TechnologySection from '../components/home/TechnologySection';
import ProcessSection from '../components/home/ProcessSection';
import VideoSection from '../components/home/VideoSection';
import ResultsSection from '../components/home/ResultsSection';
import IndustriesSection from '../components/home/IndustriesSection';
import WarrantySection from '../components/home/WarrantySection';
import PartnersSection from '../components/home/PartnersSection';
import TeamSection from '../components/home/TeamSection';
import CertificatesSection from '../components/home/CertificatesSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';
import RussianDisclaimer from '../components/home/RussianDisclaimer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#1a1a1a]">
        <RussianDisclaimer />
        <Header />
        <main>
          <HeroSection />
          <TechnologySection />
          <ProcessSection />
          <VideoSection />
          <ResultsSection />
          <IndustriesSection />
          <WarrantySection />
          <PartnersSection />
          <TeamSection />
          <CertificatesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}