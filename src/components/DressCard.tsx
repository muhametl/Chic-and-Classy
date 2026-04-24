/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import type { Dress } from '../constants';

interface DressCardProps {
  dress: Dress;
  onClick: (dress: Dress) => void;
  index: number;
  key?: React.Key;
}

export default function DressCard({ dress, onClick, index }: DressCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div 
        className="relative aspect-[3/4] overflow-hidden bg-brand-surface border border-brand-ink/5 cursor-pointer"
        onClick={() => onClick(dress)}
      >
        <img 
          src={dress.mainImage} 
          alt={dress.name}
          className="w-full h-full object-cover transition-transform duration-[2s] scale-100 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="absolute inset-0 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
          <button 
            className="px-8 py-3 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-medium border border-brand-ink/5"
          >
            View Article
          </button>
        </div>

        {dress.featured && (
          <div className="absolute top-6 left-6">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40">
              Featured / {dress.id.padStart(3, '0')}
            </span>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-1 text-center">
        <h3 className="text-[13px] font-serif italic mb-1 group-hover:opacity-50 transition-opacity">
          {dress.name}
        </h3>
        <p className="text-[10px] text-brand-muted uppercase tracking-[0.2em]">
          {dress.category} Collection
        </p>
        <span className="text-[11px] font-light mt-2 opacity-60">
          {dress.price}
        </span>
      </div>
    </motion.div>
  );
}
