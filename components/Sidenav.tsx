import Link from "next/link";
export default function Sidenav() {
  return (
    <aside className="bg-gray-200 p-4">
      <nav>
        <ul>
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link href="/admin" className="hover:underline">Admin</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
