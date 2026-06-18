'use client';
import { useState, useEffect } from 'react';
import MenuSection from '../components/MenuSection';
import { motion } from 'framer-motion';

const menuData = [
  {
    category: "STARTERS",
    icon: "🥂",
    items: [
      { id: 1, name: "Truffle Carpaccio", price: "24 ₼", desc: "Thinly sliced beef, truffle oil, parmesan, micro-greens.", tags: ["Beef", "Premium"] },
      { id: 2, name: "Salmon Tartare", price: "28 ₼", desc: "Fresh Atlantic salmon, avocado cream, citrus vinaigrette.", tags: ["Salmon", "Fresh"] },
      { id: 3, name: "Foie Gras Toast", price: "32 ₼", desc: "French foie gras, brioche, fig compote, toasted pistachios.", tags: ["Gourmet", "Signature"] },
    ]
  },
  {
    category: "MAIN COURSE",
    icon: "🍽️",
    items: [
      { id: 4, name: "Saffron Risotto", price: "32 ₼", desc: "Carnaroli rice, authentic saffron, aged parmesan.", tags: ["Vegetarian", "Premium"] },
      { id: 5, name: "Ribeye Steak", price: "48 ₼", desc: "Dry-aged 21 days, served with rosemary butter and sea salt.", tags: ["Beef", "Signature"] },
      { id: 6, name: "Black Cod Miso", price: "42 ₼", desc: "Chilean sea bass, white miso glaze, jasmine rice.", tags: ["Seafood", "Asian"] },
    ]
  },
  {
    category: "DESSERT",
    icon: "🍰",
    items: [
      { id: 7, name: "Chocolate Fondant", price: "18 ₼", desc: "Valrhona chocolate, sea salt, served with vanilla bean ice cream.", tags: ["Chocolate", "Premium"] },
      { id: 8, name: "Panna Cotta", price: "16 ₼", desc: "Italian cream, berry coulis, gold leaf.", tags: ["Classic", "Elegant"] },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a14] to-[#0f0f0f] text-white relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#d4af37] to-transparent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#8b7d2e] to-transparent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-[#d4af37] to-transparent opacity-3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10">
        {/* Шапка */}
        <motion.div 
          className="text-center pt-16 pb-4 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={isLoaded ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-6xl">✨</span>
            </motion.div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-serif-display text-white mb-2 tracking-tighter animate-fade-in-up">
            LUMIÈRE
          </h1>
          
          <p className="text-sm md:text-base tracking-[0.3em] text-[#d4af37] uppercase font-light mb-6">Culinary Excellence</p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <p className="text-xs md:text-sm tracking-widest text-white/60 uppercase">Digital Menu</p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>
        </motion.div>

        {/* Основное меню */}
        <motion.div 
          className="w-full flex justify-center px-4 md:px-8 py-8"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <div className="w-full max-w-2xl">
            {menuData.map((section, idx) => (
              <motion.div key={section.category} variants={itemVariants}>
                <MenuSection 
                  title={section.category}
                  icon={section.icon}
                  items={section.items}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Футер */}
        <motion.footer 
          className="text-center py-16 px-6 relative"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="divider-subtle mb-8"></div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/30 mb-2">Baku, Azerbaijan</p>
          <p className="text-[9px] uppercase tracking-[0.15em] text-white/20">A Culinary Experience</p>
        </motion.footer>
      </div>
    </main>
  );
}