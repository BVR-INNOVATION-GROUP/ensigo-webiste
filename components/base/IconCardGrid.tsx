import IconCard, { IconCardI } from '@/components/base/IconCard'
import SectionHeader from '@/components/base/SectionHeader'
import React, { Activity, HTMLAttributes } from 'react'

export interface Props extends HTMLAttributes<HTMLDivElement> {
    data: IconCardI[]
    heading?: string
    caption?: string
    leftAlign?: boolean
}

const IconCardGrid: React.FC<Props> = ({ data, heading, caption, leftAlign, ...attr }) => {

    return (
        <div {...attr}>
            <Activity mode={heading ? "visible" : "hidden"}>
                <SectionHeader heading={heading ?? ""} caption={caption} />
            </Activity>
            <div className="flex items-stretch gap-4 justify-stretch">
                {data?.map((item, i) => <IconCard leftAlign={leftAlign} key={i} {...item} />)}
            </div>
        </div>
    )
}

export default IconCardGrid