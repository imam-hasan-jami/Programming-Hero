import Link from "next/link";
import React from "react";

export default function NotFoundPage404() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mb-10">404 Not Found!</p>
      <Link href="/" className="bg-amber-400 text-black p-5 text-lg">Go Back to Home</Link>
    </div>
  );
}
