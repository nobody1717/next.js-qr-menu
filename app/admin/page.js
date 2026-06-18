import Navbar from '../../components/Navbar';
import AdminPanel from '../../components/AdminPanel';

export default function AdminPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-4 text-white/30">Админ-панель</p>
            <h1 className="text-4xl font-serif">Управление меню</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60">
              Здесь можно добавлять новые позиции, которые отобразятся на главной странице.
            </p>
          </div>
          <AdminPanel />
        </div>
      </section>
    </main>
  );
}
