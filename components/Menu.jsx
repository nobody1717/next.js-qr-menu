"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "qr-menu-items";
const DEFAULT_MENU = [
  { id: 1, name: "Truffle Carpaccio", price: "24 ₼", desc: "Beef, truffle oil, parmesan." },
];

function loadMenu() {
  if (typeof window === "undefined") return DEFAULT_MENU;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_MENU;
    const data = JSON.parse(raw);
    return Array.isArray(data) && data.length ? data : DEFAULT_MENU;
  } catch {
    return DEFAULT_MENU;
  }
}

export default function Menu() {
  const [menuItems, setMenuItems] = useState(DEFAULT_MENU);

  useEffect(() => {
    const items = loadMenu();
    setMenuItems(items);

    if (typeof window !== "undefined" && !window.localStorage.getItem(STORAGE_KEY)) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, []);

  return (
    <section id="menu" className="py-20 px-6 max-w-2xl mx-auto">
      <h2 className="text-[10px] tracking-[0.3em] uppercase mb-12 text-center text-white/30">Меню</h2>
      <div className="space-y-8">
        {menuItems.map((item) => (
          <div key={item.id} className="border-b border-white/5 pb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-serif">{item.name}</h3>
              <span className="text-sm text-white/40">{item.price}</span>
            </div>
            <p className="text-xs text-white/50 italic mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
