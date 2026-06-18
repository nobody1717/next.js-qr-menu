"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Меню', href: '#menu' },
  { label: 'Интерьер', href: '#interior' },
  { label: 'Адрес', href: '#address' },
  { label: 'Админ', href: '/admin' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
          LUMIÈRE
        </a>
        <div className="hidden items-center gap-10 text-[12px] uppercase tracking-[0.35em] text-white/60 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 p-6 flex flex-col gap-4 text-center">
          <a href="#menu" onClick={() => setIsOpen(false)}>Меню</a>
          <a href="#interior" onClick={() => setIsOpen(false)}>Интерьер</a>
          <a href="#address" onClick={() => setIsOpen(false)}>Адрес</a>
          <a href="/admin" onClick={() => setIsOpen(false)}>Админ</a>
        </div>
      )}
    </nav>
  );
}