"use client"
import DataCard from '@/components/base/DataCard';
import SectionHeader from '@/components/base/SectionHeader';
import { MapPin, Pin } from 'lucide-react';
import React, { Activity, useEffect, useState } from 'react'

interface ProjectSummary {
    count: string;
    label: string;
}

interface ProjectI {
    id: number
    photo: string;
    title: string;
    location: string;
    about: string;
    highlights: string[];
    summary: ProjectSummary[];
    status: "Active" | "Completed";
}

const Projects = () => {

    const [currentProjectID, setCurrentProjectID] = useState(1)

    const projects: ProjectI[] = [
        {
            id: 1,
            photo: "https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg",
            title: "Kenya Coastal Restoration",
            location: "Mombasa, Kenya",
            about: "Restoring mangrove forests along Kenya's coastline to protect against erosion and create sustainable livelihoods.",
            highlights: [
                "Carbon sequestration: 30,000 tons/year",
                "15 fishing communities supported",
                "Coastal protection enhanced"
            ],
            summary: [
                { count: "150,000", label: "Trees" },
                { count: "500 hectares", label: "Area" },
                { count: "12", label: "Communities" }
            ],
            status: "Active"
        },
        {
            id: 2,
            photo: "https://images.pexels.com/photos/1567058/pexels-photo-1567058.jpeg",
            title: "Sahel Green Belt",
            location: "Niger & Chad",
            about: "Creating a green belt to combat desertification in the Sahel region while providing economic opportunities.",
            highlights: [
                "Prevents soil erosion",
                "Creates sustainable farming zones",
                "Supports 5,000+ families"
            ],
            summary: [
                { count: "200,000", label: "Trees" },
                { count: "800 hectares", label: "Area" },
                { count: "25", label: "Communities" }
            ],
            status: "Active"
        },
        {
            id: 3,
            photo: "https://images.pexels.com/photos/1374295/pexels-photo-1374295.jpeg",
            title: "Uganda Rainforest Recovery",
            location: "Bwindi, Uganda",
            about: "Restoring degraded rainforest areas near Bwindi to protect biodiversity and support local communities.",
            highlights: [
                "Protects gorilla habitat",
                "Boosts ecotourism",
                "Preserves 200+ endemic species"
            ],
            summary: [
                { count: "100,000", label: "Trees" },
                { count: "350 hectares", label: "Area" },
                { count: "8", label: "Communities" }
            ],
            status: "Active"
        },
        {
            id: 4,
            photo: "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg",
            title: "Ghana Community Forest",
            location: "Ashanti Region, Ghana",
            about: "Community-led reforestation project creating sustainable timber and fruit resources.",
            highlights: [
                "Community co-ownership model",
                "3,000 trees producing fruit",
                "Local employment created"
            ],
            summary: [
                { count: "50,000", label: "Trees" },
                { count: "150 hectares", label: "Area" },
                { count: "6", label: "Communities" }
            ],
            status: "Completed"
        }
    ];



    const getProjectImage = (id: number) => {

        return `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.8)), url(${projects[id - 1]?.photo})`
    }
    const currentProjectImage = getProjectImage(currentProjectID)

    const currentProject = projects[currentProjectID - 1]


    return (
        <div className='pb-[5vw]'>
            <SectionHeader leftAlign heading='Featured Projects' />

            <div className="flex gap-3">

                {/* main render  */}
                <div className={` flex-1 rounded-lg bg-cover relative`} style={{
                    backgroundImage: currentProjectImage
                }}>

                    {/* header  */}
                    <div className="absolute pt-[3vw] px-[4vw]">
                        <div className="bg-pale rounded-full text-[12px] px-4 py-2">{currentProject?.status}</div>
                    </div>

                    {/* content  */}
                    <div className="px-[4vw] w-full text-white absolute bottom-4 rounded left-4 p-8">
                        <h2 className="text-3xl">{currentProject?.title}</h2>
                        <div className="flex items-center gap-1 mt-3">
                            <MapPin size={14} />
                            <u>{currentProject?.location}</u>
                        </div>
                        <p className="mt-3">{currentProject?.about}</p>

                        <div className="flex items-end mt-3 justify-between">
                            <div className="flex gap-2">
                                {currentProject?.summary.map((s, i) => (
                                    <div key={i} className=' text-center backdrop-blur-sm bg-white/10 rounded p-6'>
                                        <h3 className="text-xl font-[600]">{s?.count}</h3>
                                        <p>{s?.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className=" bg-white/10 backdrop-blur-sm rounded p-6">
                                <h3 className="text-xl font-bold">Impact HighLights</h3>
                                <div className="mt-3">
                                    {
                                        currentProject?.highlights?.map((h, i) => (<div className='mt-2 opacity-80' key={i}>{h}</div>))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* controls  */}
                <div className='flex flex-col gap-3'>

                    {/* controller  */}
                    {
                        projects?.map((p, i) => (<div
                            key={i}
                            className='flex gap-1 items-center'>
                            <div
                                onClick={() => setCurrentProjectID(p?.id)}
                                className=" bg-cover bg-center rounded-lg w-[10vw] h-[8vw]" style={{
                                    backgroundImage: getProjectImage(p?.id)
                                }} />
                            <Activity mode={p?.id == currentProjectID ? "visible" : "hidden"}>
                                <div className="bg-primary rounded-lg w-[8px] h-[3vw]" />
                            </Activity>

                        </div>))
                    }

                </div>

            </div>

        </div>
    )
}

export default Projects