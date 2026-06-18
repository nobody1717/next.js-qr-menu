"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';
import { useState } from 'react';

export default function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div layout className="border-b border-white/10 py-8 px-4 cursor-pointer">
      <div className="flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h3 className="text-xl font-serif text-white">{item.name}</h3>
          <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{item.tags.join(' • ')}</p>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-lg font-light">{item.price} ₼</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={20} /></motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-sm text-white/60 mt-4 italic font-light leading-relaxed">
            {item.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}