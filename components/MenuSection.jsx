"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function MenuSection({ title, items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="mb-16">
      {/* Заголовок категории */}
      <h2 className="text-[10px] tracking-[0.3em] text-white/30 mb-8 uppercase font-bold text-center">
        {title}
      </h2>
      
      {/* Список блюд */}
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="border-b border-white/5">
            <button 
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full py-6 flex items-center justify-between group transition-opacity hover:opacity-80"
            >
              <span className="text-xl font-serif text-gray-100">{item.name}</span>
              <div className="flex items-center gap-4">
                <span className="text-sm font-light text-gray-400">{item.price}</span>
                <motion.div 
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} className="text-white/20" />
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
                  className="overflow-hidden"
                >
                  <p className="pb-6 px-1 text-sm text-white/40 leading-relaxed italic font-light">
                    {item.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}