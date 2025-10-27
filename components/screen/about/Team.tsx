import React from 'react'
import TeamCard, { TeamCardI } from './TeamCard'

const Team = () => {

    const members: TeamCardI[] = [
        {
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusLvamRmWuTQcDMJSlzsin4o5RAgEkAWZxw&s",
            name: "Dr. Amara Okafor",
            title: "Founder & CEO",
            bio: "Environmental scientist with 15+ years experience in sustainable development."
        },
        {
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzW9n0PDT-SHVT6kr2ttY6HoLEzoatxZW1tA&s",
            name: "Kwame Mensah",
            title: "Chief Technology Officer",
            bio: "Tech innovator specializing in blockchain and environmental monitoring systems."
        },
        {
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHmSxzjvGwAs9hMtPP0DpQoThPRGOh1u5Aw&s",
            name: "Zainab Hassan",
            title: "Director of Community Engagement",
            bio: "Community organizer passionate about grassroots environmental movements."
        },
        {
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXp_oyaP4mn_lzbzLy5rhxs0ZT8W93wtfOQ&s",
            name: "Thabo Ndlovu",
            title: "Head of Partnerships",
            bio: "Corporate strategist with expertise in sustainable business models."
        },
    ]

    return (
        <div>

            <div className='flex items-center gap-1 mb-6'>
                <div className='w-5 bg-secondary h-10' />
                <div className='h-[40px] items-center flex px-6 w-[12vw] [clip-path:polygon(0%_0%,80%_0%,100%_100%,0%_100%)] bg-primary'>
                    Meet Our Team
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    {members?.slice(0, 2)?.map((m, i) => <TeamCard key={i} {...m} />)}
                </div>
                <div className="flex gap-3">
                    {members?.slice(2, 4)?.map((m, i) => <TeamCard key={i} {...m} />)}
                </div>
            </div>

        </div>
    )
}

export default Team