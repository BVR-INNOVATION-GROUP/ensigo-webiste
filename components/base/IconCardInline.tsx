import React, { HTMLAttributes, ReactNode } from "react"

export interface IconCardInlineI extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode
    title: string
    paragraph: string

}

const IconCardInline: React.FC<IconCardInlineI> = ({ title, icon, paragraph, className, ...attr }) => {
    return (
        <div className={`flex-1 border-white bg-pale rounded p-8 ${className}`}  {...attr}>

            <div className="flex items-center gap-2">
                <div className="bg-pale-dark text-primary rounded-full p-4 mb-3 items-center justify-center flex">
                    {icon}
                </div>
            </div>
            <h3 className="text-[1rem] font-bold">{title}</h3>
            <div>
                <p className="mt-3">{paragraph}</p>
            </div>

        </div>
    )
}

export default IconCardInline