export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}