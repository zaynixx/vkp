import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Attestat № 64',
    subtitle: 'Right to perform restoration works (K6S310DR, D49) — Ukrainian Railways',
    preview: 'https://media.base44.com/files/public/693dbb5c06105ba5b9f6dfbe/ca3d00e37_-1.pdf',
    file: 'https://media.base44.com/files/public/693dbb5c06105ba5b9f6dfbe/ca3d00e37_-1.pdf',
  },
  {
    title: 'Certificate of Enterprise Conformity',
    subtitle: 'Shipping Register of Ukraine — Marine crankshaft restoration',
    preview: 'https://media.base44.com/files/public/693dbb5c06105ba5b9f6dfbe/190433de6_-2.pdf',
    file: 'https://media.base44.com/files/public/693dbb5c06105ba5b9f6dfbe/190433de6_-2.pdf',
  },
  {
    title: 'Patent № 122619',
    subtitle: 'Method of restoring crankshaft journals — Ukraine',
    preview: 'https://media.base44.com/files/public/693dbb5c06105ba5b9f6dfbe/7fea161d1_.pdf',
    file: 'https://media.base44.com/files/public/693dbb5c06105ba5b9f6dfbe/7fea161d1_.pdf',
  },
  {
    title: 'Technical Conditions TU У 28.5-38322361-003:2017',
    subtitle: 'Crankshafts K6S310DR, D49 — Electric Arc Metallization',
    preview: 'https://media.base44.com/files/public/693dbb5c06105ba5b9f6dfbe/8253a2214_2017.pdf',
    file: 'https://media.base44.com/files/public/693dbb5c06105ba5b9f6dfbe/8253a2214_2017.pdf',
  },
];

export default function CertificatesSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="py-24 bg-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#c9a227] text-sm tracking-[0.3em] uppercase">Official Documents</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Certificates & Patents</h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelected(cert)}
              className="bg-[#1a1a1a] border border-[#333] hover:border-[#c9a227]/50 transition-all duration-300 cursor-pointer group flex flex-col"
            >
              {/* PDF Preview */}
              <div className="w-full h-48 overflow-hidden bg-[#111] relative">
                <iframe
                  src={cert.preview}
                  className="w-full h-full pointer-events-none"
                  title={cert.title}
                  scrolling="no"
                />
                <div className="absolute inset-0" />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm mb-2 leading-snug">{cert.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{cert.subtitle}</p>
                </div>
                <div className="flex items-center justify-end">
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-[#c9a227] transition-colors" />
                </div>
                </div>
                </motion.div>
                ))}
        </div>
      </div>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1a1a1a] border border-[#333] w-full max-w-3xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-[#333]">
                <h3 className="text-white font-semibold text-sm">{selected.title}</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={selected.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c9a227] text-xs hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Open PDF
                  </a>
                  <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-hidden" style={{ minHeight: '60vh' }}>
                <iframe
                  src={`${selected.file}#page=${selected.page}`}
                  className="w-full h-full"
                  style={{ minHeight: '60vh' }}
                  title={selected.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}