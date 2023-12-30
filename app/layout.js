import Link from "next/link";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My app</title>
      </head>
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
