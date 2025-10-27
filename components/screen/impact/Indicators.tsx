import { IconCardI } from '@/components/base/IconCard'
import IconCardGrid from '@/components/base/IconCardGrid'
import SectionHeader from '@/components/base/SectionHeader'
import { ChartNoAxesCombined, Droplets, HandCoins, LandPlot, Leaf, ShieldCheck, Sprout, TreePine, Trees, Users, Waypoints } from 'lucide-react'
import React from 'react'

const Indicators = () => {

    const stats: IconCardI[] = [
        {
            icon: <Sprout />,
            h1: "45",
            h1Sub: "%",
            h2: "Biodiversity Increase",
            paragraph: "In restored areas.",

        },
        {
            icon: <Leaf />,
            h1: "60",
            h1Sub: "%",
            h2: "Soil Quality Improvement",
            paragraph: "Organic matter increase.",

        },
        {
            icon: <Droplets />,
            h1: "2.5",
            h1Sub: "m",
            h2: "Water Table Recovery",
            paragraph: "Average rise in wells.",

        },
        {
            icon: <HandCoins />,
            h1: "40",
            h1Sub: "%",
            h2: "Local Income Boost",
            paragraph: "Average household increase.",

        },
        {
            icon: <TreePine />,
            h1: "88",
            h1Sub: "%",
            h2: "Tree Survival Rate",
            paragraph: "Above industry standard.",

        },
        {
            icon: <Users />,
            h1: "65",
            h1Sub: "%",
            h2: "Women's Participation",
            paragraph: "In project leadership.",

        },
    ]

    return (
        <div className='mb-[6rem]'>
            <SectionHeader heading='Key Performance Indicators' />
            <div className="flex flex-col gap-3">
                <IconCardGrid data={stats?.slice(0, 3)} />
                <IconCardGrid data={stats?.slice(3, 6)} />
            </div>
        </div>
    )
}

export default Indicators