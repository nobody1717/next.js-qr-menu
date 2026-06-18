import MenuSection from '../components/MenuSection';

// В будущем эти данные можно вынести в отдельный JSON-файл или получать из API
const menuData = [
  {
    category: "STARTERS",
    items: [
      { id: 1, name: "Truffle Carpaccio", price: "24 ₼", desc: "Thinly sliced beef, truffle oil, parmesan, micro-greens." },
      { id: 2, name: "Salmon Tartare", price: "28 ₼", desc: "Fresh Atlantic salmon, avocado cream, citrus vinaigrette." },
    ]
  },
  {
    category: "MAIN COURSE",
    items: [
      { id: 3, name: "Saffron Risotto", price: "32 ₼", desc: "Carnaroli rice, authentic saffron, aged parmesan." },
      { id: 4, name: "Ribeye Steak", price: "48 ₼", desc: "Dry-aged 21 days, served with rosemary butter and sea salt." },
    ]
  },
  {
    category: "DESSERT",
    items: [
      { id: 5, name: "Chocolate Fondant", price: "18 ₼", desc: "Valrhona chocolate, sea salt, served with vanilla bean ice cream." },
    ]
  }
];

export default function Home() {
  return (
    // min-h-screen гарантирует, что фон растянется на весь экран
    <main className="min-h-screen bg-[#0A0A0A] text-white py-20 px-6">
      
      {/* Логотип и брендинг */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-serif tracking-tighter mb-4">LUMIÈRE</h1>
        <div className="w-16 h-[1px] bg-white/10 mx-auto" />
      </div>

      {/* Контейнер для меню с ограничением по ширине */}
      <div className="max-w-xl mx-auto">
        {menuData.map((section) => (
          <MenuSection 
            key={section.category} 
            title={section.category} 
            items={section.items} 
          />
        ))}
      </div>

      {/* Футер (опционально) */}
      <footer className="text-center mt-20 text-[10px] uppercase tracking-[0.2em] text-white/20">
        Baku, Azerbaijan
      </footer>
    </main>
  );
}