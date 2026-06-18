"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "qr-menu-items";
const DEFAULT_MENU = [
  { id: 1, name: "Truffle Carpaccio", price: "24 ₼", desc: "Beef, truffle oil, parmesan." },
];

function loadItems() {
  if (typeof window === "undefined") return DEFAULT_MENU;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_MENU;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : DEFAULT_MENU;
  } catch {
    return DEFAULT_MENU;
  }
}

function saveItems(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export default function AdminPanel() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    setItems(loadItems());
  }, []);

  const resetForm = () => {
    setName("");
    setPrice("");
    setDesc("");
    setEditingId(null);
  };

  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !price.trim()) {
      showMessage("Название и цена обязательны.");
      return;
    }

    const trimmed = {
      name: name.trim(),
      price: price.trim(),
      desc: desc.trim(),
    };

    let nextItems;

    if (editingId) {
      nextItems = items.map((item) =>
        item.id === editingId ? { ...item, ...trimmed } : item
      );
      showMessage("Позиция обновлена.");
    } else {
      nextItems = [
        ...items,
        {
          id: Date.now(),
          ...trimmed,
        },
      ];
      showMessage("Позиция добавлена.");
    }

    setItems(nextItems);
    saveItems(nextItems);
    resetForm();
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setName(item.name);
    setPrice(item.price);
    setDesc(item.desc);
    setMessage("");
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
    saveItems(nextItems);
    if (editingId === id) {
      resetForm();
    }
    showMessage("Позиция удалена.");
  };

  const handleCancelEdit = () => {
    resetForm();
    setMessage("Редактирование отменено.");
  };

  const formTitle = editingId ? "Редактировать позицию" : "Добавить позицию";
  const submitLabel = editingId ? "Сохранить изменения" : "Добавить в меню";

  return (
    <div className="space-y-10">
      <div className="rounded-[32px] bg-white/5 border border-white/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
        <h2 className="text-3xl font-serif mb-4">{formTitle}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm uppercase tracking-[0.25em] text-white/50 mb-2">Название</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Например, Трюфельное карпаччо"
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-[0.25em] text-white/50 mb-2">Цена</label>
            <input
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="Например, 24 ₼"
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-[0.25em] text-white/50 mb-2">Описание</label>
            <textarea
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              placeholder="Краткое описание блюда"
              rows={4}
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-white/90"
              >
                {submitLabel}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/40"
                >
                  Отмена
                </button>
              )}
            </div>
            {message && <p className="text-sm text-emerald-300">{message}</p>}
          </div>
        </form>
      </div>

      <div className="rounded-[32px] bg-white/5 border border-white/10 p-8">
        <h3 className="text-2xl font-serif mb-4">Текущие позиции</h3>
        <div className="space-y-4">
          {items.length === 0 ? (
            <p className="text-sm text-white/50">Пока нет позиций. Добавьте первую.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="rounded-3xl border border-white/10 bg-black/10 p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-base font-semibold">{item.name}</h4>
                    <p className="text-xs text-white/50 mt-1">{item.desc || "Без описания"}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-white/40">{item.price}</span>
                    <button
                      type="button"
                      onClick={() => handleEdit(item)}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white/40"
                    >
                      Ред.
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-red-200 transition hover:bg-red-500/20"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
