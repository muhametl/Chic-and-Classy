/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-20 pb-12 px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16 mb-24">
        <div className="flex gap-20">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest font-bold text-black/40 mb-4">Contact</span>
            <span className="text-sm font-light">test@chicandclassy.com</span>
            <span className="text-sm font-light mt-1">Direct: +377 44 279 212</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest font-bold text-black/40 mb-4">Follow</span>
            <span className="text-sm font-light hover:opacity-50 cursor-pointer transition-opacity">@chic_and_classy</span>
            <span className="text-sm font-light hover:opacity-50 cursor-pointer transition-opacity mt-1">Journal</span>
          </div>
        </div>

        <div className="flex flex-col md:items-end">
          <span className="text-[9px] uppercase tracking-widest font-bold text-black/40 mb-4">Stay Informed</span>
          <div className="relative w-full md:w-64 border-b border-brand-ink/10 pb-2">
            <input 
              type="email" 
              placeholder="Newsletter Subscription" 
              className="bg-transparent w-full text-[13px] font-light outline-none opacity-60"
            />
            <button className="absolute right-0 top-0 opacity-40 hover:opacity-100 transition-opacity">
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-black/5">
        <div className="text-[10px] uppercase tracking-widest text-black/40">
          © 2026 Chic and Classy — All Rights Reserved
        </div>
        <div className="flex gap-10 text-[10px] uppercase tracking-widest text-black/40">
          <a href="#" className="hover:text-brand-ink transition-colors">Legal notice</a>
          <a href="#" className="hover:text-brand-ink transition-colors">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
