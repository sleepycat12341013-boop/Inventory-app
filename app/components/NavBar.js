// components/NavBar.js
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-0 bg-black text-white text-sm md:gap-0 w-screen">
      <Link
        href="/"
        className="block px-3 py-2 bg-black hover:bg-neutral-700 transition-colors duration-100"
      >
        Add Items
      </Link>

      <Link
        href="/itemsinformation"
        className="block px-3 py-2 bg-black hover:bg-neutral-700 transition-colors duration-100"
      >
        Items Information
      </Link>

      <Link
        href="/archives"
        className="block px-3 py-2 bg-black hover:bg-neutral-700 transition-colors duration-100"
      >
        Archives
      </Link>

      <Link
        href="/settings"
        className="block px-3 py-2 bg-black hover:bg-neutral-700 transition-colors duration-100"
      >
        Settings
      </Link>
    </nav>
  );
}
