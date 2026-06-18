import MenuSection from '../components/MenuSection';

const menuData = [
  { category: "STARTERS", items: [{ id: 1, name: "Truffle Carpaccio", price: "24 ₼", desc: "Thinly sliced beef, truffle oil, parmesan." }] },
  { category: "MAIN COURSE", items: [{ id: 2, name: "Saffron Risotto", price: "32 ₼", desc: "Carnaroli rice, saffron, aged parmesan." }] }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white py-24 px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-serif text-center tracking-tight mb-24">LUMIÈRE</h1>
        {menuData.map((s) => <MenuSection key={s.category} title={s.category} items={s.items} />)}
      </div>
    </main>
  );
}