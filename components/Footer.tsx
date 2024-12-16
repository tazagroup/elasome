import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-gray-100 p-4 text-center">
        <p>&copy; 2023 Elasome. All rights reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
