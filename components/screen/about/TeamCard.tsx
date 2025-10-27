import Image from 'next/image'
import React, { HTMLAttributes } from 'react'

export interface TeamCardI extends HTMLAttributes<HTMLDivElement> {
    photo: string
    name: string
    title: string
    bio: string
}

const TeamCard: React.FC<TeamCardI> = ({ photo, name, title, bio, className, ...attr }) => {
    return (
        <div
            {...attr}
            className={`flex bg-paper flex-1 flex-col items-center justify-center p-[4vw] ${className}`}
        >
            <div className="relative w-24 h-24">
                <Image
                    src={photo}
                    alt={name}
                    fill
                    className="rounded-full object-cover"
                />
            </div>
            <div className="font-bold text-[1.2rem] my-2">{name}</div>
            <p className="rounded-full border-[var(---primary)] border text-primary px-4 py-1">{title}</p>
            <p className='max-w-[70%] mt-3 text-center'>{bio}</p>
        </div>
    )
}

export default TeamCard