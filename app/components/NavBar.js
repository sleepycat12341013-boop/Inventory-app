// components/NavBar.js
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-4 px-3 py-2 bg-neutral-800 text-white text-sm md:gap-6 md:px-6 md:py-3">
      <Link href="/additems">Add Items</Link>
      <Link href="/itemsinformation">Items Information</Link>
      <Link href="/arcaives">Arcaives</Link>
      <Link href="/settings">Settings</Link>
    </nav>
  );
}
