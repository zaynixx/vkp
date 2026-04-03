import React from 'react';
import { motion } from 'framer-motion';
import { Train, Ship } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function IndustriesSection() {
  const { t } = useLanguage();

  const industries = [
    {
      key: 'locomotive',
      icon: Train,
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80',
    },
    {
      key: 'marine',
      icon: Ship,
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693dbb5c06105ba5b9f6dfbe/d50edbe0e_image.png',
    },
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-[#222] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#c9a227] text-sm tracking-[0.3em] uppercase">{t.industries.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{t.industries.title}</h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto" />
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
              
              {/* Content */}
              <div className="relative p-8 md:p-12 min-h-[400px] flex flex-col justify-end">
                <div className="w-16 h-16 bg-[#c9a227] flex items-center justify-center mb-6">
                  <industry.icon className="w-8 h-8 text-[#1a1a1a]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {t.industries[industry.key].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.industries[industry.key].description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}