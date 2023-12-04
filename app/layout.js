export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My app</title>
      </head>
      <body>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
