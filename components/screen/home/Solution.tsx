import { IconCardI } from '@/components/base/IconCard'
import IconCardGrid from '@/components/base/IconCardGrid'
import { Bean, BeanOff, ChartNoAxesCombined, ChevronDown, Leaf, ShieldCheck, Sprout } from 'lucide-react'
import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLDivElement> {
}

const Solution: React.FC<Props> = ({ ...attr }) => {

    const solutions: IconCardI[] = [
        {
            icon: <ShieldCheck />,
            h2: "Verified Provenance",
            paragraph: "Every seed traced to certified mother trees with GPS documentation"
        },
        {
            icon: <Leaf />,
            h2: "Standardized Nurseries",
            paragraph: "Partner network trained in best practices for healthy seedlings"
        },
        {
            icon: <ChartNoAxesCombined />,
            h2: "Data-Driven Monitoring",
            paragraph: "Track every step from collection to planting with EnsigoTrace"
        },
    ]

    return (
        <div {...attr}>
            <IconCardGrid data={solutions} heading='Our Solution' />
        </div>
    )
}

export default Solution