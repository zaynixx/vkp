import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function RussianDisclaimer() {
  const { language, t } = useLanguage();
  const [dismissed, setDismissed] = React.useState(false);

  if (language !== 'ru' || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-red-900 via-red-800 to-red-900 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <p className="text-white text-sm md:text-base flex-1">
              {t.disclaimer}
            </p>
            <button
              onClick={() => setDismissed(true)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}