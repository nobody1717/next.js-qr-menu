import './globals.css';

export const metadata = {
  title: 'Lumière | Digital Menu',
  description: 'Элегантное QR-меню нашего ресторана',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Премиальные шрифты из Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <meta name="theme-color" content="#050505" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased bg-gradient-to-br from-[#050505] via-[#0a0a14] to-[#0f0f0f]">
        {children}
      </body>
    </html>
  );
}