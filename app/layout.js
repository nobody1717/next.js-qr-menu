import './globals.css';

export const metadata = {
  title: 'Lumière | Digital Menu',
  description: 'Элегантное QR-меню нашего ресторана',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Подключаем премиальные шрифты из Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Inter:wght@300;400&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}