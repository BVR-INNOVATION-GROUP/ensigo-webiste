"use client"
import { useInView } from 'framer-motion'
import { Mail } from 'lucide-react'
import React, { Activity, ReactNode, useEffect, useRef, useState } from 'react'

export interface IconCardI {
    icon?: ReactNode
    sections?: number
    h1?: string
    h1Sub?: string
    h2?: string
    caption?: string
    paragraph: string
    leftAlign?: boolean
}

const IconCard: React.FC<IconCardI> = ({ icon, h2, paragraph, leftAlign, caption, h1, h1Sub }) => {

    const [h1Count, setH1Count] = useState(0)
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { amount: .7 })

    useEffect(() => {

        if (isInView) {
            const duration = 100
            const value = h1 ? parseInt(h1) : 0
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
            className={`flex flex-col ${leftAlign ? "items-start" : "items-center text-center"} justify-center rounded p-[3rem] bg-paper flex-1`}>

            <Activity mode={icon ? "visible" : "hidden"}>
                <div className='rounded-full text-primary bg-pale p-4'>
                    {icon}
                </div>
            </Activity>

            {/* main headline  */}
            <Activity mode={h1 ? "visible" : "hidden"}>
                <h1 className="text-2xl text-primary mt-6">{h1Count}
                    <Activity mode={h1Sub ? "visible" : "hidden"}>
                        <span className="text-base">{h1Sub}</span>
                    </Activity>
                </h1>
            </Activity>

            {/* content  */}
            <Activity mode={h2 ? "visible" : "hidden"}>
                <h4 className={`${h1 ? "mt-3" : "mt-6"} mb-3 text-[1rem] font-[600]`}>{h2}</h4>
            </Activity>
            <p className={`${!leftAlign && "max-w-[80%]"} text-gray-500`}>{paragraph}</p>
            <Activity mode={caption ? "visible" : "hidden"}>
                <p>{caption}</p>
            </Activity>

        </div>
    )
}

export default IconCard