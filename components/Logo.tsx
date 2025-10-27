import React from "react"

const Logo: React.FC<{ mode?: "light" | "dark" }> = ({ mode = "dark" }) => {
    return (
        <div className={`font-bold text-xl ${mode != "light" ? "text-primary" : "text-white"}`}>Ensigo</div>
    )
}

export default Logo