"use client"

import { usePathname } from "next/navigation"

import Link from "next/link"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <Link href="/">FLIXX</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                className={`nav-link ${pathname === "/movies" && "active"}`}
                href="/movies"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${pathname === "/shows" && "active"}`}
                href="/shows"
              >
                TV Shows
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
