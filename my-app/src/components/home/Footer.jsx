import React from 'react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#111] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/da6188193_logoAG.png"
              alt="Alliance Group"
              className="w-10 h-10 object-contain"
            />
            <div>
              <span className="text-[#c9a227] font-semibold tracking-wider">ALLIANCE</span>
              <span className="text-white font-light ml-2">GROUP</span>
            </div>
          </div>

          {/* Company Info */}
          <p className="text-gray-500 text-sm text-center">
            {t.footer.company}
          </p>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            2011 - {new Date().getFullYear()} © {t.footer.rights}
          </p>
        </div>

        {/* Decorative Lines */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-20 h-0.5 bg-[#c9a227]/30 rotate-45" />
          <div className="w-2 h-2 bg-[#c9a227] rotate-45" />
          <div className="w-20 h-0.5 bg-[#c9a227]/30 -rotate-45" />
        </div>
      </div>
    </footer>
  );
}