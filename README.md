# QR Menu — Премиальное веб-приложение для ресторана

**Доступные языки:** [Русский](#русский) | [English](#english) | [Azərbaycanca](#azərbaycanca)

---

## Русский

### 📱 О проекте

**QR Menu** — это современное веб-приложение для просмотра меню ресторана премиум-класса. Разработано с использованием **Next.js**, **Tailwind CSS** и **Framer Motion** для обеспечения элегантного пользовательского опыта с минималистичной темной палитрой.

### ✨ Возможности

- 🎨 **Премиальный дизайн** — минималистичная типографика, темная тема, утонченные анимации
- 📋 **Интерактивное меню** — аккордеон с гладкими переходами, легко добавлять и редактировать позиции
- 🎥 **Карусель интерьера** — свайпируемые изображения помещений ресторана
- ⚙️ **Админ-панель** — добавление, редактирование и удаление позиций меню в реальном времени
- 📱 **Полная адаптивность** — оптимальный вид на всех устройствах
- 🚀 **Высокая производительность** — построено на Next.js с оптимизацией загрузки

### 🛠️ Технологический стек

- **Next.js 14** — React фреймворк для production-ready приложений
- **React 18** — библиотека компонентов
- **Tailwind CSS** — утилиты-первый CSS
- **Framer Motion** — библиотека анимаций
- **Lucide React** — набор иконок

### 📦 Установка и запуск

1. **Клонируйте репозиторий:**
```bash
git clone https://github.com/nobody1717/next.js-qr-menu
cd qr-menu
```

2. **Установите зависимости:**
```bash
npm install
```

3. **Запустите приложение в режиме разработки:**
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

4. **Для production сборки:**
```bash
npm run build
npm start
```

### 📂 Структура проекта

```
qr-menu/
├── app/
│   ├── layout.js           # Корневой layout с подключением шрифтов
│   ├── page.js             # Главная страница с hero, меню, интерьером, адресом
│   ├── globals.css         # Глобальные стили и переменные
│   └── admin/
│       └── page.js         # Админ-панель
├── components/
│   ├── Navbar.jsx          # Навигация с анимацией (Framer Motion)
│   ├── MenuSection.jsx     # Секция меню с аккордеоном
│   └── AdminPanel.jsx      # Компонент админ-панели
├── package.json            # Зависимости проекта
└── tailwind.config.js      # Конфигурация Tailwind CSS
```

### 🎯 Использование

#### Просмотр меню
1. Откройте главную страницу приложения
2. Нажмите на "Меню" в навигации или прокрутите вниз
3. Нажимайте на пункты меню для раскрытия описания

#### Админ-панель
1. Перейдите в `/admin`
2. Добавьте новый пункт меню через форму
3. Редактируйте или удаляйте существующие позиции
4. Данные сохраняются в `localStorage` браузера

### 🎨 Темы и стилизация

- **Палитра:** Темный фон (#0A0A0A), белый текст с прозрачностью
- **Типографика:** 
  - Заголовки: *Cormorant Garamond* (элегантный serif)
  - Основной текст: *Inter* (современный sans-serif)
- **Анимации:** Плавные переходы через Framer Motion

### 🔧 Конфигурация

Отредактируйте следующие файлы для кастомизации:

- `app/globals.css` — глобальные стили и цвета
- `tailwind.config.js` — конфигурация Tailwind
- `components/Navbar.jsx` — навигационные ссылки
- `app/page.js` — содержимое главной страницы

### 📝 Лицензия

MIT License — свободное использование в коммерческих и личных целях.

---

## English

### 📱 About the Project

**QR Menu** is a modern web application for viewing restaurant menus in a premium style. Built with **Next.js**, **Tailwind CSS**, and **Framer Motion** to provide an elegant user experience with a minimalist dark aesthetic.

### ✨ Features

- 🎨 **Premium Design** — minimalist typography, dark theme, subtle animations
- 📋 **Interactive Menu** — accordion with smooth transitions, easily add and edit items
- 🎥 **Interior Carousel** — swipeable images of restaurant spaces
- ⚙️ **Admin Panel** — add, edit, and delete menu items in real-time
- 📱 **Fully Responsive** — optimized for all devices
- 🚀 **High Performance** — built with Next.js for production-ready applications

### 🛠️ Tech Stack

- **Next.js 14** — React framework for production-ready applications
- **React 18** — component library
- **Tailwind CSS** — utility-first CSS
- **Framer Motion** — animation library
- **Lucide React** — icon set

### 📦 Installation and Setup

1. **Clone the repository:**
```bash
git clone https://github.com/nobody1717/next.js-qr-menu
cd qr-menu
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run in development mode:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
```bash
npm run build
npm start
```

### 📂 Project Structure

```
qr-menu/
├── app/
│   ├── layout.js           # Root layout with font imports
│   ├── page.js             # Main page with hero, menu, interior, address
│   ├── globals.css         # Global styles and variables
│   └── admin/
│       └── page.js         # Admin panel
├── components/
│   ├── Navbar.jsx          # Navigation with animation (Framer Motion)
│   ├── MenuSection.jsx     # Menu section with accordion
│   └── AdminPanel.jsx      # Admin panel component
├── package.json            # Project dependencies
└── tailwind.config.js      # Tailwind CSS configuration
```

### 🎯 Usage

#### Viewing the Menu
1. Open the main page
2. Click "Menu" in the navigation or scroll down
3. Click menu items to expand descriptions

#### Admin Panel
1. Navigate to `/admin`
2. Add a new menu item using the form
3. Edit or delete existing items
4. Data is saved in browser `localStorage`

### 🎨 Themes and Styling

- **Color Palette:** Dark background (#0A0A0A), white text with transparency
- **Typography:**
  - Headings: *Cormorant Garamond* (elegant serif)
  - Body text: *Inter* (modern sans-serif)
- **Animations:** Smooth transitions via Framer Motion

### 🔧 Configuration

Edit these files to customize:

- `app/globals.css` — global styles and colors
- `tailwind.config.js` — Tailwind configuration
- `components/Navbar.jsx` — navigation links
- `app/page.js` — main page content

### 📝 License

MIT License — free for commercial and personal use.

---

## Azərbaycanca

### 📱 Layihə Haqqında

**QR Menu** — premium stildə restoran menyusunu görmək üçün müasır veb tətbiqidir. **Next.js**, **Tailwind CSS** və **Framer Motion** ilə hazırlanmışdır və minimalist tünd estetika ilə zərif istifadəçi təcrübəsi təmin edir.

### ✨ Xüsusiyyətlər

- 🎨 **Premium Dizayn** — minimalist tipoqrafiya, tünd mövzu, incə animasiyalar
- 📋 **İnteraktiv Menyü** — aksordeon yumşaq keçidlərlə, maddələr asanlıqla əlavə və redaktə edilə bilər
- 🎥 **İç Karuseli** — restoran sahələrinin sürüşdürülə biləcən şəkilləri
- ⚙️ **Admin Paneli** — menyü maddələrini real vaxtda əlavə, redaktə və silmə
- 📱 **Tamamilə Duyarlı** — bütün cihazlar üçün optimallaşdırılmış
- 🚀 **Yüksək Performans** — istehsal hazır tətbiqlər üçün Next.js ilə qurulmuş

### 🛠️ Texnoloji Yığın

- **Next.js 14** — istehsal hazır tətbiqlər üçün React framework
- **React 18** — komponent kitabxanası
- **Tailwind CSS** — faydalılıq-birinci CSS
- **Framer Motion** — animasiya kitabxanası
- **Lucide React** — sənəd dəsti

### 📦 Quraşdırma və Başlanğıc

1. **Depositoriyası klonlaşdırın:**
```bash
git clone https://github.com/nobody1717/next.js-qr-menu
cd qr-menu
```

2. **Asılılıqları quraşdırın:**
```bash
npm install
```

3. **Inkişaf rejimində çalışdırın:**
```bash
npm run dev
```

Açın [http://localhost:3000](http://localhost:3000) brauzerdə.

4. **İstehsal üçün qurma:**
```bash
npm run build
npm start
```

### 📂 Layihə Strukturu

```
qr-menu/
├── app/
│   ├── layout.js           # Kök layout şrift idxalı ilə
│   ├── page.js             # Qəhrəman, menyü, daxili, ünvan ilə əsas səhifə
│   ├── globals.css         # Qlobal üslublar və dəyişənlər
│   └── admin/
│       └── page.js         # Admin paneli
├── components/
│   ├── Navbar.jsx          # Animasyon ilə naviqasiya (Framer Motion)
│   ├── MenuSection.jsx     # Aksordeon ilə menyü bölməsi
│   └── AdminPanel.jsx      # Admin paneli komponenti
├── package.json            # Layihə asılılıqları
└── tailwind.config.js      # Tailwind CSS konfigürasyonu
```

### 🎯 İstifadə

#### Menyünü Baxmaq
1. Əsas səhifəni açın
2. Naviqasiyada "Menyü" düyməsinə klikləyin və ya aşağı sürüşdürün
3. Təsvirlərini genişləndirmək üçün menyü maddələrinə klikləyin

#### Admin Paneli
1. `/admin` səhifəsinə gedin
2. Forma istifadə edərək yeni menyü maddəsi əlavə edin
3. Mövcud maddələri redaktə və ya silin
4. Məlumatlar brauzerin `localStorage` ilə yadda saxlanılır

### 🎨 Mövzular və Stil

- **Rəng Paletası:** Tünd fon (#0A0A0A), şəffaflıqla ağ mətn
- **Tipoqrafiya:**
  - Başlıqlar: *Cormorant Garamond* (zərif serif)
  - Mətni: *Inter* (müasır sans-serif)
- **Animasiyalar:** Framer Motion vasitəsilə yumşaq keçidlər

### 🔧 Konfigürasyon

Fərdiləşdirmək üçün bu faylları redaktə edin:

- `app/globals.css` — qlobal üslublar və rənglər
- `tailwind.config.js` — Tailwind konfigürasyonu
- `components/Navbar.jsx` — naviqasiya keçidləri
- `app/page.js` — əsas səhifə məzmunu

### 📝 Lisenziya

MIT Lisenziyası — kommersiya və şəxsi istifadə üçün pulsuz.
