"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MENU_ITEMS = [
  {
    id: 1,
    category: "Signature",
    name: "Truffle Carpaccio",
    price: "24 ₼",
    notes: "Olive oil · microgreens",
    description:
      "Тонко нарезанное говяжье карпаччо с ароматом белого трюфеля, хрустящими каперсами и воздушной кремовой заправкой.",
    tags: ["Говядина", "Трюфель", "Аперитив"],
  },
  {
    id: 2,
    category: "Seasonal",
    name: "Sea Urchin Risotto",
    price: "32 ₼",
    notes: "Lemon zest · Parmesan",
    description:
      "Кремовое ризотто с морским ежом, свежими травами и нотами лимона — утонченное сочетание моря и текстуры.",
    tags: ["Рис", "Морепродукты", "Кремовое"],
  },
  {
    id: 3,
    category: "Dessert",
    name: "Dark Chocolate Mousse",
    price: "16 ₼",
    notes: "Hazelnut crumble",
    description:
      "Насыщенный шоколадный мусс с хрустящей фундуковой крошкой и легким флером соли для идеального сладкого завершения.",
    tags: ["Шоколад", "Десерт", "Гурман"],
  },
];

export default function MenuSection() {
  const [openId, setOpenId] = useState(MENU_ITEMS[0]?.id || null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="menu" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">Menu</p>
          <h2 className="mt-4 text-4xl font-[CormorantGaramond] uppercase tracking-[0.15em] text-white md:text-5xl">
            Chef’s Selection
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
            Искусство гастрономии в чистой форме. Простота, контраст и роскошные акценты.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {MENU_ITEMS.map((item) => (
            <motion.article
              key={item.id}
              layout
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition hover:border-white/20 hover:bg-white/10"
            >
              <button
                type="button"
                aria-expanded={openId === item.id}
                aria-controls={`dish-${item.id}`}
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-6 text-left"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-3">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">{item.category}</p>
                    <h3 className="text-2xl font-[CormorantGaramond] leading-tight text-white">{item.name}</h3>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="text-lg font-semibold text-white">{item.price}</span>
                    <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                      {openId === item.id ? "Скрыть" : "Подробнее"}
                    </span>
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    key="content"
                    id={`dish-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="border-t border-white/10 px-6 pb-6"
                  >
                    <p className="text-sm leading-7 text-white/70">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.35em] text-white/40">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
