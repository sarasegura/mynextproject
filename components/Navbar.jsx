import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex gap-1 bg-fuchsia-700 text-white">
          <li>
            <Link href="/"> Home</Link>
          </li>
          <li>
            <Link href="/about"> About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
