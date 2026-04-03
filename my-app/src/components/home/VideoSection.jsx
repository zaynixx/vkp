import React from 'react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="py-24 bg-[#111]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#c9a227] text-sm tracking-[0.3em] uppercase">In Action</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Watch Our Technology</h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full border-2 border-[#c9a227]/30"
          style={{ paddingBottom: '56.25%' }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/lyaJGaMgBu8"
            title="Alliance Group - Crankshaft Restoration Technology"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}