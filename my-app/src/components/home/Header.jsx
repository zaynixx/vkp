import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'technology', href: '#technology' },
    { key: 'process', href: '#process' },
    { key: 'industries', href: '#industries' },
    { key: 'partners', href: '#partners' },
    { key: 'contact', href: '#contact' },
    { key: 'gallery', href: '/gallery', external: true },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ua', label: 'Українська', flag: '🇺🇦' },
    { code: 'ru', label: 'Русский', flag: '🌐' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/da6188193_logoAG.png"
              alt="Alliance Group"
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-[#c9a227] font-semibold text-lg tracking-wider">ALLIANCE</span>
              <span className="text-white font-light text-lg ml-2">GROUP</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.external ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-gray-300 hover:text-[#c9a227] transition-colors text-sm font-medium tracking-wide uppercase"
                >
                  {t.nav[item.key]}
                </Link>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-300 hover:text-[#c9a227] transition-colors text-sm font-medium tracking-wide uppercase"
                >
                  {t.nav[item.key]}
                </a>
              )
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-gray-300 hover:text-[#c9a227] transition-colors">
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline text-sm uppercase">{language}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1a1a] border-[#333]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`cursor-pointer text-gray-300 hover:text-white hover:bg-[#333] ${
                      language === lang.code ? 'text-[#c9a227]' : ''
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1a1a1a]/95 backdrop-blur-md"
          >
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                item.external ? (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-[#c9a227] transition-colors text-sm font-medium tracking-wide uppercase"
                  >
                    {t.nav[item.key]}
                  </Link>
                ) : (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-[#c9a227] transition-colors text-sm font-medium tracking-wide uppercase"
                  >
                    {t.nav[item.key]}
                  </a>
                )
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}