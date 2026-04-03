import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const photos = [
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/264c67449_IMG_9425.jpg', caption: 'Arc Metallization Process' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/a9f6edcbd_IMG_9429.jpg', caption: 'Arc Metallization in Progress' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/ed6222876_IMG_9441.jpg', caption: 'Spark Shower During Metallization' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/10008d849_IMG_9459.jpg', caption: 'Crankshaft Journal After Coating' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/35b9bf705_IMG_9759.jpg', caption: 'Crankshaft Grinding' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/1db06a503_IMG_9761.jpg', caption: 'Precision Machining' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/8a9bc4966_IMG_9762.jpg', caption: 'Crankshaft Polishing' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/f137330da_IMG_9763.jpg', caption: 'Restored Crankshaft Journal' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/cfd15c5cd_IMG_9768.jpg', caption: 'Before & After Restoration' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/5cb3951db_IMG_9776.jpg', caption: 'Final Grinding Stage' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/ab4a04f04_IMG_9777.jpg', caption: 'Surface Finishing' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/950704f06_IMG_9779.jpg', caption: 'Crankshaft Ready for Delivery' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/510c230f0_IMG_9787.jpg', caption: 'Production Workshop' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/dee70f335_photo_2021-04-29124829.jpg', caption: 'Crankshafts Before & After' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/58ee66fcd_WhatsAppImage2026-03-30at1839271.jpg', caption: 'Restored Crankshaft in Crate' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/a1a2e3c6e_WhatsAppImage2026-03-30at183927.jpg', caption: 'Multiple Crankshafts Ready' },
  { url: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/4351159a5_WhatsAppImage2026-03-31at144307.jpg', caption: 'Production Facility' },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const openPhoto = (index) => setSelected(index);
  const closePhoto = () => setSelected(null);
  const prev = () => setSelected((s) => (s - 1 + photos.length) % photos.length);
  const next = () => setSelected((s) => (s + 1) % photos.length);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closePhoto();
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]" onKeyDown={handleKeyDown} tabIndex={-1}>
      {/* Header */}
      <div className="bg-[#111] py-6 px-4 flex items-center gap-4">
        <Link to="/" className="text-[#c9a227] hover:text-white transition-colors text-sm tracking-wider">
          ← Back to Home
        </Link>
      </div>

      {/* Hero */}
      <div className="py-16 text-center px-4">
        <span className="text-[#c9a227] text-sm tracking-[0.3em] uppercase">Our Work</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Gallery</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Explore crankshaft restoration projects completed by Alliance Group, including electric arc metallization,
          precision grinding, polishing, inspection, and final recovery of heavy-duty crankshafts for marine diesel and
          locomotive engines.
        </p>
        <div className="w-24 h-1 bg-[#c9a227] mx-auto" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
              className="cursor-pointer group overflow-hidden aspect-square"
              onClick={() => openPhoto(index)}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closePhoto}
          >
            <button onClick={closePhoto} className="absolute top-4 right-4 text-white hover:text-[#c9a227] transition-colors z-10">
              <X className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white hover:text-[#c9a227] transition-colors z-10">
              <ChevronLeft className="w-10 h-10" />
            </button>
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={photos[selected].url}
              alt={photos[selected].caption}
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white hover:text-[#c9a227] transition-colors z-10">
              <ChevronRight className="w-10 h-10" />
            </button>
            <div className="absolute bottom-6 left-0 right-0 text-center text-gray-400 text-sm">
              {photos[selected].caption} — {selected + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
