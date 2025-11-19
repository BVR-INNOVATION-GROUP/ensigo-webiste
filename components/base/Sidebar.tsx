"use client"

import { LinkI } from "@/types"
import Link from "next/link"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import React from "react"

export interface Props {
  links: LinkI[]
  open: boolean
  close: () => void
}

const Sidebar: React.FC<Props> = ({ open, close, links }) => {
  if (!open) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black/40 fixed top-0 left-0 w-screen h-screen z-50 flex"
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="bg-paper w-[70%] flex flex-col items-start h-full relative px-8 py-10"
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-6 right-6 hover:opacity-70 transition flex gap-1 font-78 rounded items-center p-1"
        >
          <X size={20} />
        
        </button>

        {/* Links */}
        <div className="flex flex-col gap-4 mt-16 w-full">
          {links.map((l, i) => (
            <Link
              key={i}
              href={l.link}
              onClick={close}
              className="w-full py-1 px-4 text-lg font-medium text-black/80 rounded-xl hover:bg-black/10 transition-all duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Sidebar
