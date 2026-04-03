import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function ResultsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#c9a227]">{t.results.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* New Shaft */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#222] border border-[#333] p-8 text-center"
          >
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">{t.results.newShaft}</p>
            <p className="text-5xl md:text-6xl font-bold text-white">45.5 <span className="text-2xl">HRC</span></p>
          </motion.div>

          {/* Restored Shaft */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#c9a227] p-8 text-center"
          >
            <p className="text-[#1a1a1a]/70 text-sm uppercase tracking-wider mb-4">{t.results.restoredShaft}</p>
            <p className="text-5xl md:text-6xl font-bold text-[#1a1a1a]">62-67 <span className="text-2xl">HRC</span></p>
          </motion.div>
        </div>

        {/* Arrow and Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div className="w-16 h-0.5 bg-[#c9a227]" />
          <ArrowRight className="w-6 h-6 text-[#c9a227]" />
          <span className="text-[#c9a227] font-semibold">{t.results.improvement}</span>
          <span className="text-white font-bold text-2xl">+40%</span>
        </motion.div>
      </div>
    </section>
  );
}