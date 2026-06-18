import Navbar from '../components/Navbar';
import MenuSection from '../components/MenuSection';

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section id="hero" className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">Fine Dining Experience</p>
          <h1 className="mt-8 text-5xl font-serif uppercase tracking-[0.15em] text-white md:text-6xl">
            Эстетика гастрономической роскоши
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Темная палитра, минималистичная типографика и просторная композиция для ресторана премиум-класса.
          </p>
        </div>
      </section>

      <MenuSection />

      <section id="interior" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">Интерьер</p>
            <h2 className="mt-4 text-4xl font-serif uppercase tracking-[0.15em] text-white md:text-5xl">
              Простор, свет и атмосфера
            </h2>
          </div>
          <div className="flex gap-6 overflow-x-auto px-2 pb-2 snap-x hide-scrollbar">
            {['Светлый зал', 'Уютная зона', 'Приватные столы'].map((title) => (
              <article
                key={title}
                className="min-w-[78vw] md:min-w-[360px] snap-center rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#111111]" />
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Стильное пространство, продуманное до деталей, с мягкой засветкой и элегантными акцентами.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="address" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">Address</p>
            <h2 className="mt-4 text-4xl font-serif uppercase tracking-[0.15em] text-white md:text-5xl">
              Наш адрес
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-white/40">Boutique Restaurant</p>
              <p className="mt-4 text-lg leading-8 text-white/80">
                ул. Примерная, 12 · 3 этаж · Центральный район
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
                Идеальное место для делового ужина или романтического вечера. Удобная парковка и премиальный сервис.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[#111111] border border-white/10" />
              <p className="mt-6 text-sm leading-7 text-white/60">
                Здесь будет карта. Вставьте iframe Google Maps или статичную схему для гостей.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}