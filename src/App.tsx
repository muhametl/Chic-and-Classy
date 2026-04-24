/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import DressCard from './components/DressCard';
import DressDetail from './components/DressDetail';
import Footer from './components/Footer';
import { DRESSES, Category, Dress } from './constants';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedDress, setSelectedDress] = useState<Dress | null>(null);

  const filteredDresses = useMemo(() => {
    if (activeCategory === 'All') return DRESSES;
    return DRESSES.filter(d => d.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Collection Section */}
        <section className="py-24 max-w-7xl mx-auto px-12" id="collection">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar Information */}
            <aside className="lg:w-64 flex flex-col justify-between py-4">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[10px] uppercase tracking-[0.4em] text-brand-muted mb-4 block font-bold"
                >
                  Curation — 2026
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-serif italic mb-8"
                >
                  Éthéré<br/>Spring / 26
                </motion.h2>
                
                <div className="space-y-12">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-black/40 font-bold mb-6">Categories</span>
                    <FilterBar 
                      activeCategory={activeCategory} 
                      onCategoryChange={setActiveCategory} 
                    />
                  </div>
                </div>
              </div>
              <div className="text-[11px] leading-relaxed text-black/60 pt-12 lg:pt-0 max-w-xs">
                <p>A collection inspired by the soft light of dawn and the fluid silhouettes of the Mediterranean coast.</p>
              </div>
            </aside>

            {/* Grid display */}
            <div className="flex-1">
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20"
              >
                <AnimatePresence mode='popLayout'>
                  {filteredDresses.map((dress, idx) => (
                    <DressCard 
                      key={dress.id} 
                      dress={dress} 
                      index={idx}
                      onClick={setSelectedDress}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredDresses.length === 0 && (
                <div className="py-24 text-center">
                  <p className="text-brand-muted font-serif italic text-xl">New arrivals coming soon to this collection.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Boutique Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted mb-6 block">Bespoke Fitting</span>
              <h2 className="text-4xl md:text-6xl font-serif italic mb-8">Personalized <br /> Perfection</h2>
              <p className="text-brand-muted text-sm leading-relaxed mb-10 max-w-md">
                Experience the luxury of a garment made specifically for you. Our master tailors ensure that every seam and stitch aligns perfectly with your silhouette.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[4/5] bg-brand-bg relative overflow-hidden">
                <img 
                  src="/images/image2.jpg" 
                  alt="Tailoring"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-64 border border-brand-ink/10 bg-brand-bg p-4 hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop" 
                  alt="Fabric detail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <DressDetail 
        dress={selectedDress} 
        onClose={() => setSelectedDress(null)} 
      />
    </div>
  );
}

