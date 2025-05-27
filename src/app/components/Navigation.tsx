'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services', isAnchor: true },
    { href: '#projects', label: 'Projects', isAnchor: true },
    { href: '/blog', label: 'Blog', isAnchor: false },
    { href: '#contact', label: 'Contact', isAnchor: true }
  ];

  const handleNavigation = (href: string, isAnchor: boolean) => {
    setIsMenuOpen(false); // Close mobile menu if open
    
    if (isAnchor) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // For non-anchor links, navigation will happen through the Link component
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold relative group">
              <span className="relative z-10">H&H Labs</span>
              <span className="absolute inset-x-0 bottom-0 h-2 bg-black/5 group-hover:h-full transition-all duration-300" />
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavigation(link.href, true)}
                    className="px-4 py-2 rounded-full text-gray-600 hover:text-black relative group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute inset-0 bg-black/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 rounded-full text-gray-600 hover:text-black relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute inset-0 bg-black/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                )
              ))}
              <button className="ml-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative flex items-center justify-center">
                <span 
                  className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                  }`} 
                />
                <span 
                  className={`w-6 h-0.5 bg-black absolute transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-0' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavigation(link.href, true)}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <button className="mt-4 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
