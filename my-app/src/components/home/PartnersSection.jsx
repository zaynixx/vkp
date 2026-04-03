import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function PartnersSection() {
  const { t } = useLanguage();

  const partners = [
    { 
      name: 'Ukrainian Railways', 
      country: 'Ukraine',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ukrzaliznytsia_logo.svg/960px-Ukrzaliznytsia_logo.svg.png'
    },
    { 
      name: 'CZ LOKO', 
      country: 'Czech Republic',
      logo: 'https://www.czloko.com/pool/czloko/upload/czlokologo.png'
    },
    { 
      name: 'ČKD PRAHA DIZ', 
      country: 'Czech Republic',
      logo: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/315b9a5e8_2026-03-31210733.png',
    },
    { 
      name: 'ZOS Holding', 
      country: 'Slovakia',
      logo: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/9016823ed_generated_image.png'
    },
  ];

  return (
    <section id="partners" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#c9a227] text-sm tracking-[0.3em] uppercase">{t.partners.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{t.partners.title}</h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto" />
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#222] border border-[#333] p-8 text-center h-full transition-all duration-500 hover:border-[#c9a227]/50 hover:bg-[#2a2a2a]">
                {/* Logo */}
                <div className="w-full h-20 flex items-center justify-center mb-6">
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-16 max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                      onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                    />
                  ) : null}
                  <div className="w-16 h-16 bg-[#c9a227]/10 rounded-full items-center justify-center group-hover:bg-[#c9a227]/20 transition-colors" style={{display: partner.logo ? 'none' : 'flex'}}>
                    <span className="text-[#c9a227] font-bold text-2xl">{partner.name[0]}</span>
                  </div>
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2">{partner.name}</h3>
                <p className="text-gray-500 text-sm uppercase tracking-wider">{partner.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}