"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function MenuSection({ title, items }) {
  const [openId, setOpenId] = useState(null);
  return (
    <section className="mb-16">
      <h2 className="text-[11px] tracking-[0.4em] text-white/30 mb-10 uppercase font-medium text-center">{title}</h2>
      <div className="space-y-1">
        {items.map((item) => (
          <div key={item.id} className="border-b border-white/5">
            <button onClick={() => setOpenId(openId === item.id ? null : item.id)} className="w-full py-6 flex items-center justify-between">
              <span className="text-xl font-serif text-gray-100">{item.name}</span>
              <div className="flex items-center gap-6">
                <span className="text-sm font-light text-gray-400">{item.price}</span>
                <motion.div animate={{ rotate: openId === item.id ? 180 : 0 }}><ChevronDown size={16} className="text-white/20" /></motion.div>
              </div>
            </button>
            <AnimatePresence>
              {openId === item.id && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className="pb-6 pt-1 text-sm text-white/50 leading-relaxed italic font-light">{item.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}