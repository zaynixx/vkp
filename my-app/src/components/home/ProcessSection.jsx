import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">{t.process.title}</h2>
          <p className="text-gray-600 text-lg">{t.process.subtitle}</p>
          <div className="w-24 h-1 bg-[#c9a227] mt-6" />
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-[#c9a227]/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.slice(0, 4).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[#1a1a1a] font-bold text-xl">{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {t.process.steps.slice(4).map((step, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-[#1a1a1a] font-bold text-xl">{index + 5}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}