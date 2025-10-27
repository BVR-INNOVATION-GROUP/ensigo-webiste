import { IconCardI } from '@/components/base/IconCard'
import IconCardGrid from '@/components/base/IconCardGrid'
import SectionHeader from '@/components/base/SectionHeader'
import { ChartNoAxesCombined, LandPlot, Leaf, ShieldCheck, Trees, Waypoints } from 'lucide-react'
import React from 'react'

const EnvironmentImpact = () => {

    const stats: IconCardI[] = [
        {
            icon: <Trees />,
            h1: "500000",
            h2: "Trees Planted",
            h1Sub: "+",
            paragraph: "Native species restoring ecosystems across 6 African countries"
        },
        {
            icon: <Waypoints />,
            h1: "125000",
            h2: "Tons CO₂ Captured",
            paragraph: "Annual carbon sequestration equivalent to removing 27,000 cars"
        },
        {
            icon: <LandPlot />,
            h1: "1800",
            h2: "Hectares Restored",
            paragraph: "Degraded land transformed into thriving forest ecosystems"
        },
    ]

    return (
        <div className='mb-[6rem]'>
            <SectionHeader heading='Environmental Impact' caption="Restoring Africa's ecosystems one tree at a time" />
            <IconCardGrid data={stats} />
        </div>
    )
}

export default EnvironmentImpact