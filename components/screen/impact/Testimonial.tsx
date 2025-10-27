import React, { Activity } from 'react'

export interface TestimonialI {
    photo?: string
    organisation: string
    location: string
    about: string
    impact: string

}

const Testimonial: React.FC<TestimonialI> = ({ organisation, location, about, impact, photo }) => {

    const getIntials = (name: string) => {

        let startingChars = ""

        const nameWords = name.split(" ")

        nameWords?.slice(0, 2).forEach(w => {
            startingChars += (w.charAt(0))
        })

        return startingChars

    }

    return (
        <div className='bg-paper flex-1 max-w-[50%]'>

            {/* header  */}
            <div className="flex items-center gap-4">
                <div
                    style={photo ? {
                        background: `url(${photo})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    } : {}}
                    className="bg-pale-dark bg-center bg-cover border-r-8 border-pale border-b-8 rounded h-24 w-24 flex items-center justify-center">
                    <Activity mode={!photo ? "visible" : "hidden"}>
                        <h4 className="text-2xl">{getIntials(organisation)}</h4>
                    </Activity>
                </div>
                <div className='flex flex-col justify-center'>
                    <h5 className="text-[1rem] font-bold">{organisation}</h5>
                    <p>{location}</p>
                </div>
            </div>

            {/* content  */}
            <div className="p-8 text-gray-500">
                {about}
                <hr className="opacity-10 my-6" />
                <p className="text-primary text-right">{impact}</p>
            </div>
        </div>
    )
}

export default Testimonial