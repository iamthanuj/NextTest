import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
        <nav className="bg-blue-600 h-[50px] w-full flex items-center px-5">
          <ul className="flex gap-3 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/users">Users</Link></li>
            <li><Link href="/admin">Admin</Link></li>
          </ul>
        </nav>
  )
}

export default NavBar