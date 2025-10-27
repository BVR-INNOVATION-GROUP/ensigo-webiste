import React, { HtmlHTMLAttributes, ReactNode } from 'react'

export interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

const Container: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={className}>
            <div className={`m-auto max-w-[90vw]`}>
                {children}
            </div>
        </div>
    )
}

export default Container