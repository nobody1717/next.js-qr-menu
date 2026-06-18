import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="bg-charcoal text-white">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-charcoal font-sans text-white antialiased">{children}</body>
    </html>
  );
}
