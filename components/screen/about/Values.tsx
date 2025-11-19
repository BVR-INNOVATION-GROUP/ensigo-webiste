import IconCardInline, { IconCardInlineI } from '@/components/base/IconCardInline'
import SectionHeader from '@/components/base/SectionHeader'
import { Handshake, Lightbulb, Sprout, UsersRound } from 'lucide-react'
import React from 'react'

const Values = () => {

    const values: IconCardInlineI[] = [
        {
            icon: <UsersRound />,
            title: "Community First",
            paragraph: 'We prioritize the needs and voices of local communities in everything we do.'
        },
        {
            icon: <Sprout />,
            title: "Sustainability",
            paragraph: 'Our mission is to create lasting environmental impact through sustainable practices.'
        },
        {
            icon: <Lightbulb />,
            title: "Innovation",
            paragraph: "We leverage cutting-edge technology to solve Africa's environmental challenges"
        },
        {
            icon: <Handshake />,
            title: "Collaboration",
            paragraph: 'We work together with partners, communities, and stakeholders for greater impact.'
        },
    ]

    return (
        <div className='bg-paper rounded border p-[5vw]  border-white'>
            <SectionHeader heading='Our Core Values' />
            <div className="flex flex-col gap-3">

                <div className="sm:flex gap-3 ">
                    {values?.slice(0, 2)?.map((v, i) => <IconCardInline {...v} key={i} />)}
                </div>
                <div className="sm:flex gap-3">
                    {values?.slice(2, 4)?.map((v, i) => <IconCardInline {...v} key={i} />)}
                </div>

            </div>
        </div>
    )
}

export default Values