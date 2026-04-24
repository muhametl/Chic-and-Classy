/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-brand-bg/95 backdrop-blur-md py-5 border-b border-black/5 shadow-none text-brand-ink' : 'bg-transparent py-10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <div className="flex-1 hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] font-medium">
          <a href="#" className="hover:opacity-40 transition-opacity">Collections</a>
          <a href="#" className="hover:opacity-40 transition-opacity">About</a>
        </div>

        <button 
          className="md:hidden flex-1"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={18} strokeWidth={1.2} />
        </button>

        <div className="flex-none">
          <h1 className="text-2xl md:text-3xl tracking-[0.1em] font-serif font-light italic text-center">
            Chic and Classy
          </h1>
        </div>

        <div className="flex-1 flex justify-end gap-10 items-center text-[11px] uppercase tracking-[0.25em] font-medium">
          <button className="hidden md:block hover:opacity-40 transition-opacity">
            Search
          </button>
          <button className="hidden md:block hover:opacity-40 transition-opacity">
            Boutique
          </button>
          <button className="hover:opacity-40 transition-opacity flex items-center gap-2">
            Cart <span className="opacity-40">(0)</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ x: mobileMenuOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-brand-bg z-[60] flex flex-col p-8"
      >
        <div className="flex justify-end">
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-8 text-2xl font-serif text-center">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:italic">Collections</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:italic">Boutique</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:italic">About</a>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-brand-muted text-center py-8">
          Chic and Classy Haute Couture © 2026
        </div>
      </motion.div>
    </nav>
  );
}
