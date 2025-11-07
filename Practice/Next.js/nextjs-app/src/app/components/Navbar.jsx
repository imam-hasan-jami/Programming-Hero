import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-center items-center p-4 bg-gray-100 shadow-md">
        <ul className="flex justify-between items-center w-3/12">
          <li>
            <a href="/" className="text-blue-500 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-blue-500 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-blue-500 hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="/blog" className="text-blue-500 hover:underline">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
