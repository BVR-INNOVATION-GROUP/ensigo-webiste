import Link from "next/link"
import React from "react"



const Logo: React.FC<{ mode?: "light" | "dark" }> = ({ mode = "dark" }) => {
    
    return (
        <Link href={"/"}>
         <div className={`font-bold cursor-pointer text-xl ${mode != "light" ? "text-primary" : "text-white"}`}>Ensigo</div>
        </Link>
    )
}

export default Logo