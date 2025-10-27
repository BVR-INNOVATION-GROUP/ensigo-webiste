import { IconCardI } from '@/components/base/IconCard'
import IconCardGrid from '@/components/base/IconCardGrid'
import { Bean, BeanOff, Sprout } from 'lucide-react'



const Problem = () => {

    const problems: IconCardI[] = [
        {
            icon: <BeanOff />,
            h2: "Poor Seed Quality",
            paragraph: "Seeds collected from degraded trees without verified provenance"
        },
        {
            icon: <Bean />,
            h2: "Low Survival Rates",
            paragraph: "Unregulated nurseries and improper growing conditions"
        },
        {
            icon: <Sprout />,
            h2: "Lost Impact",
            paragraph: "No monitoring or care after planting, wasting resources"
        },
    ]

    return (
        <IconCardGrid data={problems} heading='The Problem We’re solving' />
    )
}

export default Problem