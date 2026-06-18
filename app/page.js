import Navbar from '../components/Navbar';

export default function Home() {
  const menuItems = [{ id: 1, name: "Truffle Carpaccio", price: "24 ₼", desc: "Beef, truffle oil, parmesan." }];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Меню */}
      <section id="menu" className="py-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-[10px] tracking-[0.3em] uppercase mb-12 text-center text-white/30">Меню</h2>
        <div className="space-y-8">
          {menuItems.map(item => (
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

      {/* Интерьер */}
      <section id="interior" className="py-20">
        <h2 className="text-center text-[10px] uppercase tracking-[0.3em] mb-10 text-white/30">Интерьер</h2>
        <div className="flex gap-4 overflow-x-auto px-6 snap-x hide-scrollbar">
          {[1,2,3].map(i => (
            <div key={i} className="min-w-[85vw] md:min-w-[400px] h-[300px] bg-white/5 rounded-lg snap-center" />
          ))}
        </div>
      </section>

      {/* Адрес */}
      <section id="address" className="py-20 px-6 text-center">
        <h2 className="text-[10px] uppercase tracking-[0.3em] mb-10 text-white/30">Адрес</h2>
        <div className="w-full max-w-xl mx-auto h-[250px] bg-white/5 rounded-lg flex items-center justify-center border border-white/10 text-white/20">
          Карта (вставьте iframe)
        </div>
      </section>
    </main>
  );
}