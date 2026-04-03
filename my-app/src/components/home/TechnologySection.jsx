import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Factory, TrendingUp, Zap, Shield, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function TechnologySection() {
  const { t } = useLanguage();

  const features = [
    {
      key: 'dimensions',
      icon: Ruler,
    },
    {
      key: 'complex',
      icon: Factory,
    },
    {
      key: 'performance',
      icon: TrendingUp,
    },
  ];

  const stats = [
    { value: '800m²', label: 'Production Base' },
    { value: '50-70%', label: 'Performance Improvement' },
    { value: '2x', label: 'Surface Hardness Increase' },
    { value: '70%', label: 'Friction Reduction' },
  ];

  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#c9a227] text-sm tracking-[0.3em] uppercase">{t.technology.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{t.technology.title}</h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.technology.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-[#1a1a1a] border border-[#333] p-8 h-full transition-all duration-500 hover:border-[#c9a227]/50 hover:shadow-lg hover:shadow-[#c9a227]/10">
                <div className="w-16 h-16 bg-[#c9a227]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a227] transition-colors duration-500">
                  <feature.icon className="w-8 h-8 text-[#c9a227] group-hover:text-[#1a1a1a] transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {t.technology.features[feature.key].title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t.technology.features[feature.key].description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#c9a227] p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#1a1a1a]/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}