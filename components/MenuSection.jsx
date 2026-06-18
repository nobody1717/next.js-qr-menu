"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function MenuSection({ title, icon, items }) {
  const [openId, setOpenId] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="mb-12">
      {/* Заголовок категории */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="inline-block mb-3">
          <span className="text-3xl">{icon}</span>
        </div>
        <h2 className="text-xs md:text-sm tracking-[0.3em] text-[#d4af37] uppercase font-semibold mb-3">
          {title}
        </h2>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto opacity-60"></div>
      </motion.div>
      
      {/* Список блюд */}
      <motion.div 
        className="space-y-0"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      >
        {items.map((item, idx) => (
          <motion.div 
            key={item.id}
            variants={itemVariants}
            className="group card-premium rounded-lg overflow-hidden"
          >
            <button 
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full px-4 md:px-6 py-5 md:py-6 flex items-center justify-between transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="text-left flex-1">
                <h3 className="text-base md:text-lg font-serif-elegant text-white font-500 mb-1">
                  {item.name}
                </h3>
                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 md:gap-4 ml-4">
                <motion.span 
                  className="text-base md:text-lg font-light text-[#d4af37] whitespace-nowrap font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.price}
                </motion.span>
                <motion.div 
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={18} className="text-[#d4af37]" />
                </motion.div>
              </div>
            </button>

            {/* Описание блюда (Аккордеон) */}
            <AnimatePresence>
              {openId === item.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden border-t border-white/10"
                >
                  <motion.p 
                    className="px-4 md:px-6 py-4 md:py-5 text-sm md:text-base text-white/70 leading-relaxed font-light italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}