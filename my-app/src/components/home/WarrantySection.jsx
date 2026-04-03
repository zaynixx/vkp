import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function WarrantySection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Big Number */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="text-[200px] md:text-[300px] font-bold text-[#c9a227]/10 leading-none absolute -top-20 -left-10">
              4
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
                {t.warranty.title}
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                {t.warranty.subtitle}
              </p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1a1a1a] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-12 h-12 text-[#c9a227]" />
                <span className="text-[#c9a227] text-4xl font-bold">WE CAN</span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {t.warranty.description}
              </p>

              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <CheckCircle className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                <p>{t.warranty.note}</p>
              </div>

              {/* Key Numbers */}
              <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-[#333]">
                <div>
                  <div className="text-3xl font-bold text-[#c9a227]">4 Years</div>
                  <div className="text-gray-400 text-sm">International Warranty</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#c9a227]">300,000 km</div>
                  <div className="text-gray-400 text-sm">Coverage Distance</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}