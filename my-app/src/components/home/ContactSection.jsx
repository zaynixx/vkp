import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'VKP.ALLIANZ@GMAIL.COM',
      href: 'mailto:VKP.ALLIANZ@GMAIL.COM',
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+380 93 668 9068',
      href: 'tel:+380936689068',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#c9a227] text-sm tracking-[0.3em] uppercase">{t.contact.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{t.contact.title}</h2>
            <div className="w-24 h-1 bg-[#c9a227] mb-8" />
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={undefined}
                  rel={undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#c9a227]/10 flex items-center justify-center group-hover:bg-[#c9a227] transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#c9a227] group-hover:text-[#1a1a1a] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-semibold group-hover:text-[#c9a227] transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form/CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#c9a227] p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Request a Quote</h3>
            <p className="text-[#1a1a1a]/80 mb-8">
              Send us details about your crankshaft and we'll provide you with a comprehensive restoration quote.
            </p>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-[#1a1a1a] text-white placeholder-gray-500 border-none focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-[#1a1a1a] text-white placeholder-gray-500 border-none focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 bg-[#1a1a1a] text-white placeholder-gray-500 border-none focus:outline-none focus:ring-2 focus:ring-white"
              />
              <textarea
                placeholder="Describe your crankshaft and requirements"
                rows={4}
                className="w-full px-4 py-3 bg-[#1a1a1a] text-white placeholder-gray-500 border-none focus:outline-none focus:ring-2 focus:ring-white resize-none"
              />
              <Button className="w-full bg-[#1a1a1a] hover:bg-[#333] text-white py-6 text-lg font-semibold rounded-none">
                Send Request
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}