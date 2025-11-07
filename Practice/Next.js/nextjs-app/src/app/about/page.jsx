"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPage() {

  const router = useRouter()  // imported from 'next/link' || this is important as there are two 'useRouter' hook

  const isLoggedIn = true;

  const handleNavigation = () => {
    if(isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  }

  return (
    <div>
      <Link href="/about/address">
        <li className='text-lg'>Address</li>
      </Link>

      <h1>About Page!</h1>

      <button className='text-sm p-3 m-5 text-black bg-amber-300 rounded-md cursor-pointer' type='button' onClick={handleNavigation}>Address Page</button>
    </div>
  )
}
