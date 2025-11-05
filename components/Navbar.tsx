"use client"

import { LinkI } from "@/types"
import Button from "./base/Button"
import Logo from "./Logo"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import Sidebar from "./base/Sidebar"

export const links: LinkI[] = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Get Involved", link: "/involvement" },
  { label: "Ensigo Trace", link: "/trace" },
  { label: "Impact", link: "/impact" },
  { label: "Our Work", link: "/work" },
  { label: "Contact", link: "/contact" },
]

const Navbar = () => {
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0)
  const [open, setOpen] = useState(false)

  const whiteList = ["about", "work", "impact", "trace"]
  const currentPath = pathname?.slice(1)
  const isWhiteListed = whiteList.includes(currentPath)
  const fillNavbar = scrollY > 100

  useEffect(() => {
    if (isWhiteListed) {
      setScrollY(101)
    } else {
      const handleScroll = () => setScrollY(window.scrollY)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  return (
    <div
      className={`py-6 fixed top-0 w-full z-50 ${
        fillNavbar && !isWhiteListed && "bg-paper"
      } ${!isWhiteListed ? "shadow-custom" : "bg-pale"}`}
    >
      <nav className="flex items-center max-w-[90vw] mx-auto justify-between">
        <Logo mode={fillNavbar ? "dark" : "light"} />

        {/* Links (desktop only) */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((l, i) => (
            <Link
              key={i}
              href={l.link}
              className={`${
                fillNavbar ? "text-black" : "text-white"
              } opacity-60 ${pathname === l.link && "font-bold opacity-100"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Partner button only on md+ */}
          <Button title="Partner With Us" variant="fill" className="hidden md:flex" />

          {/* Menu button only on small & medium devices */}
          <div className="md:hidden">
            <Button
              title=""
              leftIcon={<Menu color={fillNavbar ? "black" : "white"} />}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* Sidebar (for small & medium only) */}
      <Sidebar open={open} close={() => setOpen(false)} links={links} />
    </div>
  )
}

export default Navbar
