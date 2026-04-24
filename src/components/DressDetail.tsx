/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import type { Dress } from '../constants';

interface DressDetailProps {
  dress: Dress | null;
  onClose: () => void;
}

export default function DressDetail({ dress, onClose }: DressDetailProps) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  if (!dress) return null;

  const images = [dress.mainImage, ...dress.gallery];

  const nextImage = () => {
    setActiveImgIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
          className="relative w-full max-w-4xl h-full bg-brand-bg shadow-2xl overflow-y-auto"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-[110] w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center bg-brand-bg/80 hover:bg-brand-ink hover:text-white transition-all duration-300"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
            {/* Image Section */}
            <div className="relative h-[60vh] lg:h-full bg-gray-100 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImgIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={images[activeImgIdx]}
                  alt={dress.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={prevImage}
                      className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center bg-brand-bg/80 hover:bg-brand-ink hover:text-white transition-all duration-300"
                    >
                      <ChevronLeft size={20} strokeWidth={1} />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={nextImage}
                      className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center bg-brand-bg/80 hover:bg-brand-ink hover:text-white transition-all duration-300"
                    >
                      <ChevronRight size={20} strokeWidth={1} />
                    </button>
                  </div>
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeImgIdx === idx ? 'bg-brand-ink scale-125' : 'bg-brand-ink/30'
                      }`}
                    />
                  ))}
                  </div>
                </>
              )}
            </div>

            {/* Content Section */}
            <div className="p-10 lg:p-20 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted mb-4 block">
                {dress.category} Collection
              </span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
                {dress.name}
              </h2>
              
              <p className="text-brand-ink/70 leading-relaxed mb-12 font-light">
                {dress.description}
              </p>

              <div className="space-y-8 mb-12 border-y border-brand-ink/5 py-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">Composition & Origin</h4>
                  <ul className="space-y-1">
                    {dress.fabrics.map((fabric, i) => (
                      <li key={i} className="text-[13px] text-brand-muted">— {fabric}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">Tailored for You</h4>
                  <p className="text-[13px] text-brand-muted italic">Complimentary bespoke fittings included.</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-serif">{dress.price}</span>
              </div>


            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
