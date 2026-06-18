"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-6 py-5">
        <h1 className="text-lg font-serif uppercase tracking-widest">LUMIÈRE</h1>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/50">
          <a href="#menu" className="hover:text-white">Меню</a>
          <a href="#interior" className="hover:text-white">Интерьер</a>
          <a href="#address" className="hover:text-white">Адрес</a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 p-6 flex flex-col gap-4 text-center">
          <a href="#menu" onClick={() => setIsOpen(false)}>Меню</a>
          <a href="#interior" onClick={() => setIsOpen(false)}>Интерьер</a>
          <a href="#address" onClick={() => setIsOpen(false)}>Адрес</a>
        </div>
      )}
    </nav>
  );
}