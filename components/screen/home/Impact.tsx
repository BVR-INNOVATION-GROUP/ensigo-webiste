import DataCard, { DataCardI } from '@/components/base/DataCard'
import React from 'react'

const Impact = () => {

    const impacts: DataCardI[] = [
        {
            h1: "120",
            h1sub: "+",
            paragraph: "Verified Mother Trees"
        },
        {
            h1: "1500",
            h1sub: "+",
            paragraph: "Verified Mother Trees"
        },
        {
            h1: "5",
            paragraph: "Active Collection Groups"
        },
        {
            h1: "3",
            paragraph: "Regional Hubs in Development"
        },
    ]

    return (
        <div className='flex bg-pale-dark'>

            <img src="https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg" className='w-[50%]  object-cover' alt="" />

            <div className='w-[50%] p-[5vw]'>

                <h1 className="text-4xl font-impact mb-8">Growing <span className='relative '><span>Impact</span><span className='h-1 -bottom-2 right-0 bg-secondary rounded-full w-full absolute'></span></span></h1>
                <p className='max-w-[70%] mb-4'>Every number represents a step toward resilient ecosystems and thriving communities</p>

                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 ">
                        {impacts?.slice(0, 2)?.map((impact, i) => <DataCard key={i} {...impact} />)}
                    </div>
                    <div className="flex gap-3 ">
                        <DataCard  {...impacts[2]} />
                        <DataCard  {...impacts[3]} className='gradient' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Impact