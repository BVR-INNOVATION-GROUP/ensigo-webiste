import React, { HTMLAttributes } from 'react'

export interface ButtonI extends HTMLAttributes<HTMLButtonElement> {
    title: string
    disabled?: boolean
    variant?: "fill" | "outline" | "outline-bottom" | ""
    leftIcon?: React.ReactNode
    color?: "primary" | "dark"
}

const Button: React.FC<ButtonI> = ({ title, disabled, variant, leftIcon, color, className, ...attr }) => {

    const getBackgroundColor = () => {
        switch (color) {
            case "dark":
                return "bg-dark"
            default:
                return "bg-primary"
        }
    }

    return (
        <button
            {...attr}
            disabled={disabled} className={`flex gap-3 px-4 py-2.5 ${variant == "outline-bottom" ? "border-b " : variant == "fill" ? getBackgroundColor() + " rounded" : variant == "outline" ? "" : ""} ${className}`}

        >
            {leftIcon && leftIcon}
            {title}
        </button>
    )
}

export default Button