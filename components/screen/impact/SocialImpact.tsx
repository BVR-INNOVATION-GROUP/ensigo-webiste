import { IconCardI } from '@/components/base/IconCard'
import IconCardGrid from '@/components/base/IconCardGrid'
import SectionHeader from '@/components/base/SectionHeader'
import { BriefcaseBusiness, ChartNoAxesCombined, HeartPlus, Leaf, ShieldCheck, Users } from 'lucide-react'
import React from 'react'

const SocialImpact = () => {

    const stats: IconCardI[] = [
        {
            icon: <Users />,
            h1: "51",
            h2: "Communities Engaged",
            h1Sub: "+",
            paragraph: "Local communities leading conservation efforts"
        },
        {
            icon: <BriefcaseBusiness />,
            h1: "3200",
            h2: "Jobs Created",
            h1Sub: "+",
            paragraph: "Sustainable employment in nurseries, planting, and monitoring"
        },
        {
            icon: <HeartPlus />,
            h1: "15000",
            h2: "Lives Improved",
            paragraph: "Families benefiting from enhanced food security and income",
            h1Sub: "+"
        },
    ]

    return (
        <div className='mb-[6rem]'>
            <SectionHeader heading='Social Impact' caption="Empowering communities through sustainable development" />
            <IconCardGrid data={stats} />
        </div>
    )
}

export default SocialImpact