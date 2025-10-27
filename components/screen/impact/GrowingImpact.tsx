import DataCard, { DataCardI } from '@/components/base/DataCard'
import SectionHeader from '@/components/base/SectionHeader'
import React from 'react'

const GrowingImpact = () => {

    const stats: DataCardI[] = [
        {
            h1: "120",
            h1sub: "+",
            paragraph: "Verified Mother Trees"
        },
        {
            h1: "15000",
            h1sub: "+",
            paragraph: "Seeds Traced to Source"
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
        <div className='mb-[6rem]'>
            <SectionHeader leftAlign heading='Growing Impact' caption='Every number represents a step toward resilient ecosystems and thriving communities' />

            <div className="flex gap-2">
                <div className="flex-1 rounded bg-[url(https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg)] bg-cover bg-center">

                </div>
                <div className="flex-1 relative rounded bg-paper">

                    <div className="bg-gradient-to-r from-[#F9F9F9] via-[#C0C0C0] to-[#FFFFFF] h-[1px] w-[50%] absolute top-[50%] translate-y-[-50%] left-[50%] rotate-90 translate-x-[-50%] transform " />
                    <div className="bg-gradient-to-r from-[#F9F9F9] via-[#C0C0C0] to-[#FFFFFF] h-[1px] w-[50%] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] transform origin-right" />

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
            </div>
        </div>
    )
}

export default GrowingImpact