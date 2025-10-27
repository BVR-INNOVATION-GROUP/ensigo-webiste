import React, { Activity } from 'react'

export interface Props {
    heading: string
    caption?: string
    leftAlign?: boolean
}

const SectionHeader: React.FC<Props> = ({ heading, caption, leftAlign }) => {
    return (
        <div className={`${!leftAlign && "text-center"} mb-6`}>
            <h3 className='font-[600] text-xl'>{heading}</h3>
            <Activity mode={caption ? "visible" : "hidden"}>
                <p className='mt-2'>{caption}</p>
            </Activity>
        </div>
    )
}

export default SectionHeader