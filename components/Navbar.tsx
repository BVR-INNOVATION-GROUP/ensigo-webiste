"use client"
import { LinkI } from "@/types"
import Button from "./base/Button"
import Logo from "./Logo"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export const links: LinkI[] = [
  {
    label: "Home",
    link: "/"
  },
  {
    label: "About",
    link: "/about"
  },
  {
    label: "Get Involved",
    link: "/involvement"
  },
  {
    label: "Ensigo Trace",
    link: "/trace"
  },
  {
    label: "Impact",
    link: "/impact"
  },
  {
    label: "Our Work",
    link: "/work"
  },
  {
    label: "Contact",
    link: "/contact"
  }

]

const Navbar = () => {

  const [y, setY] = useState(0)

  const pathname = usePathname()

  const whiteList = ["about", "work", "impact",]
  const blurList = []
  const currentPath = pathname?.slice(1,)
  const isWhiteListed = whiteList.includes(currentPath)

  useEffect(() => {

    setY(0)

    if (isWhiteListed) {
      setY(101)

    }
    else {
      const handleScroll = () => {
        setY(window.scrollY)
      }

      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
    }

  }, [pathname])

  const fillNavbar = y > 100


  return (
    <div className={`py-6 z-50  fixed top-0 w-full ${fillNavbar && !isWhiteListed && "bg-paper "} ${!isWhiteListed ? "shadow-custom" : "bg-pale"}`}>
      <nav className="flex items-center max-w-[90vw] m-auto  w-full justify-between ">

        {/* logo  */}
        <Logo mode={fillNavbar ? "dark" : "light"} />

        {/* toggler for the menu  - hidden on lg */}

        {/* links  */}
        <div className="flex gap-8 items-center md:flex-row  justify-between">
          {links?.map((l, i) => <Link key={i} className={`${fillNavbar ? "text-black" : "text-white"} opacity-60 ${pathname == l.link && "font-bold opacity-100"}`} href={l.link}>{l.label}</Link>)}
        </div>


        {/* action  */}
        <Button title="Partner With Us" variant="fill" />

      </nav>
    </div>
  )
}

export default Navbar