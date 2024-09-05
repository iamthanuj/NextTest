"use client"

import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import loading from './loading'

const NavBar = () => {

  const {status, data:session} = useSession();

  return (
        <nav className="bg-blue-600 h-[50px] w-full flex items-center px-5">
          <ul className="flex gap-3 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/users">Users</Link></li>
            <li><Link href="/admin">Admin</Link></li>
            {status === "loading" && <div>Loading...</div> }
            {status === "authenticated" && <div>{session.user!.name} <span><Link href="/api/auth/signout">Log out</Link></span></div>}
            {status === "unauthenticated" && <li><Link href="/api/auth/signin">Sign in</Link></li>}
          </ul>
        </nav>
  )
}

export default NavBar 