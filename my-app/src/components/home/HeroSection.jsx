import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Crankshaft Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693dbb5c06105ba5b9f6dfbe/123464473_crank2.jpg)',
            backgroundPosition: 'center 40%'
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#1a1a1a]/75" />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/40 via-transparent to-[#1a1a1a]/40" />
        
        {/* Diagonal Lines */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#c9a227]/30 rotate-45 transform origin-left" />
          <div className="absolute top-1/2 left-8 w-full h-0.5 bg-[#c9a227]/20 rotate-45 transform origin-left" />
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 translate-x-1/2 translate-y-1/2">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#c9a227]/30 rotate-45 transform origin-left" />
          <div className="absolute top-1/2 left-8 w-full h-0.5 bg-[#c9a227]/20 rotate-45 transform origin-left" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[#c9a227] text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            {t.hero.subtitle}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
        >
          <span className="block">{t.hero.title.split(' ').slice(0, 2).join(' ')}</span>
          <span className="block text-[#c9a227]">{t.hero.title.split(' ').slice(2).join(' ')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            className="bg-[#c9a227] hover:bg-[#b8922a] text-[#1a1a1a] px-8 py-6 text-lg font-semibold rounded-none"
          >
            <a href="#contact">
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-none bg-transparent"
          >
            <a href="#technology">
              {t.hero.learnMore}
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-[#c9a227]" />
        </motion.div>
      </motion.div>
    </section>
  );
}