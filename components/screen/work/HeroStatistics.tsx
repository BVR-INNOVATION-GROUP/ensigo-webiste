"use client"
import DataCard, { DataCardI } from '@/components/base/DataCard'
import { useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const HeroStatistics = () => {

    const statRef = useRef(null)
    const isInView = useInView(statRef, { amount: 1 })
    const [opacity, setOpacity] = useState(0)

    const stats: DataCardI[] = [
        {
            h1: "500",
            h1sub: "+",
            paragraph: "Tress Planted"
        },
        {
            h1: "1,800",
            h1sub: "+",
            paragraph: "Hectares planted"
        },
        {
            h1: "51",
            paragraph: "Communities Engaged"
        },
        {
            h1: "6",
            paragraph: "African Countries"
        },
    ]

    useEffect(() => {
        if (isInView) {
            setOpacity(1)
        } else {
            setOpacity(0)
        }
    }, [isInView])

    return (
        <div ref={statRef} className={`absolute bottom-[-25%] bg-paper rounded p-[2vw] right-[5vw] transition duration-100 ${opacity == 1 ? "opacity-100" : "opacity-0"}`}>

            <div className="bg-gradient-to-r from-[#F9F9F9] via-[#C0C0C0] to-[#FFFFFF] h-[1px] w-[80%] absolute top-[50%] translate-y-[-50%] left-[50%] rotate-90 translate-x-[-50%] transform " />
            <div className="bg-gradient-to-r from-[#F9F9F9] via-[#C0C0C0] to-[#FFFFFF] h-[1px] w-[80%] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] transform origin-right" />
            <div className="flex flex-col gap-3">


                <div className="flex gap-3 ">
                    {stats?.slice(0, 2)?.map((stat, i) => <DataCard key={i} {...stat} />)}
                </div>
                <div className="flex gap-3 ">
                    <DataCard  {...stats[2]} />
                    <DataCard  {...stats[3]} />
                </div>
            </div>
        </div>
    )
}

export default HeroStatistics