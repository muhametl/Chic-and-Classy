/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import type { Category } from '../constants';

interface FilterBarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CATEGORIES: Category[] = ['All', 'Evening', 'Bridal', 'Summer', 'Casual'];

export default function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <ul className="space-y-4 text-sm tracking-wide font-light">
      {CATEGORIES.map((category) => (
        <li 
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`flex items-center cursor-pointer transition-all duration-300 ${
            activeCategory === category ? 'text-black font-medium translate-x-2' : 'text-black/50 hover:text-black'
          }`}
        >
          {activeCategory === category && (
            <motion.span 
              layoutId="filter-dot"
              className="w-1.5 h-1.5 bg-black rounded-full mr-3" 
            />
          )}
          {category} {category === 'All' ? 'Gowns' : category === 'Bridal' ? 'Couture' : category === 'Summer' ? 'Essentials' : ''}
        </li>
      ))}
    </ul>
  );
}
