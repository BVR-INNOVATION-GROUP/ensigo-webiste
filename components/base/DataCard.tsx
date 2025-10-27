"use client"
import React, { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react'
import { useInView } from "framer-motion"

export interface DataCardI extends HTMLAttributes<HTMLDivElement> {
    h1?: string
    h1sub?: string
    caption?: string
    paragraph: string
    leftAlign?: boolean
}

const DataCard: React.FC<DataCardI> = ({ h1, h1sub, paragraph, leftAlign, caption, className }) => {

    const [h1Count, setH1Count] = useState(0)
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { amount: .7 })


    useEffect(() => {

        if (isInView) {
            const value = h1 ? parseInt(h1) : 0
            const duration = 1500
            const intervalTime = duration > 0 ? duration / value : duration
            let current = 0

            const interval = setInterval(() => {
                current += 1
                setH1Count(current)

                if (current >= value) {
                    clearInterval(interval)
                }
            }, intervalTime);

            return () => clearInterval(interval)
        }

    }, [h1, isInView])

    return (
        <div
            ref={cardRef}
            className={`flex flex-col ${leftAlign ? "items-start" : "items-center text-center"} justify-center rounded p-[3rem] bg-paper flex-1 ${className}`}>

            {/* content  */}
            <h4 className='mb-3 text-2xl font-[600]'>{h1Count} <span className="text-sm">{h1sub}</span></h4>
            <p className={`${!leftAlign && "max-w-[90%]"} max-w-[90%] `}>{paragraph}</p>
            <small>{caption}</small>
        </div>
    )
}

export default DataCard