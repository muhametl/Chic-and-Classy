/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Category = 'All' | 'Evening' | 'Bridal' | 'Summer' | 'Casual';

export interface Dress {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: string;
  mainImage: string;
  gallery: string[];
  fabrics: string[];
  featured?: boolean;
}

export const DRESSES: Dress[] = [
  {
    id: '1',
    name: 'Ethereal Silk Gown',
    category: 'Evening',
    description: 'A masterpiece of flowing silk chiffon, featuring hand-pleated details and a subtle metallic sheen. Designed for the most sophisticated evening engagements.',
    price: '$2,450',
    mainImage: '/images/image1.jpg',
    gallery: [
      '/images/image5.jpg',
    ],
    fabrics: ['100% Silk Chiffon', 'Lace Trim'],
    featured: true
  },
  {
    id: '2',
    name: 'Luminous Bridal Silk',
    category: 'Bridal',
    description: 'Minimalist elegance defined. This bias-cut satin gown features a delicate cowl neckline and a dramatic cathedral-length train.',
    price: '$4,800',
    mainImage: '/images/image2.jpg',
    gallery: [
      '/images/image6.jpg',
      '/images/image7.jpg'
    ],
    fabrics: ['Italian Silk Satin', 'Silk Organza Lining'],
    featured: true
  },
  {
    id: '3',
    name: 'Azure Coast Linen',
    category: 'Summer',
    description: 'Effortless and breathable. Our signature linen midi dress with architectural sleeves and a tailored waist. Perfect for Mediterranean afternoons.',
    price: '$890',
    mainImage: '/images/image3.jpg',
    gallery: [
      '/images/image8.jpg',
    ],
    fabrics: ['Organic Belgian Linen'],
    featured: true
  },
  {
    id: '4',
    name: 'Noir Velvet Column',
    category: 'Evening',
    description: 'A deep emerald velvet gown with a sharp square neckline and a sculptural side slit. Timeless power dressing at its finest.',
    price: '$3,100',
    mainImage: '/images/image8.jpg',
    gallery: [],
    fabrics: ['Luxury Silk Velvet'],
  },
  {
    id: '5',
    name: 'Tuscany Sun Slip',
    category: 'Casual',
    description: 'A versatile silk-blend slip dress with adjustable straps. Layer it for the city or wear it alone for the resort.',
    price: '$550',
    mainImage: '/images/image7.jpg',
    gallery: [],
    fabrics: ['Silk Charmeuse'],
  },
  {
    id: '6',
    name: 'Statuesque Ivory Shell',
    category: 'Casual',
    description: 'A structured crepe midi dress that moves with you. Defined shoulders and a nipped-in waist create a powerful silhouette.',
    price: '$1,200',
    mainImage: '/images/image9.jpg',
    gallery: [],
    fabrics: ['Weighted Silk Crepe'],
  },
  {
    id: '7',
    name: 'Gardenia Lace Mini',
    category: 'Summer',
    description: 'Playful yet sophisticated. Intricate floral lace overlay on a nude silk base. Feature scallop edges and a delicate puff sleeve.',
    price: '$1,450',
    mainImage: '/images/image10.jpg',
    gallery: [],
    fabrics: ['French Guipure Lace'],
  },
  {
    id: '8',
    name: 'Pearl Mist Satin',
    category: 'Bridal',
    description: 'An understated choice for the modern bride. High neck, long sleeves, and an open back detail. Finished with hand-covered silk buttons.',
    price: '$3,900',
    mainImage: '/images/image1.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2070&auto=format&fit=crop'
    ],
    fabrics: ['Matte Heavy Satin'],
  }
];
