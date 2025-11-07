import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-center items-center p-4 bg-gray-600 shadow-md">
        <ul className="flex justify-between items-center w-3/12">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
