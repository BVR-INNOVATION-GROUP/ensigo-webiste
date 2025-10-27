import React from 'react'
import Testimonial, { TestimonialI } from './Testimonial'
import SectionHeader from '@/components/base/SectionHeader'

const Testimonials = () => {

    const testimonials: TestimonialI[] = [
        {
            organisation: "Amina's Nursery",
            location: "Mombasa, Kenya",
            about:
                "Amina now runs a thriving tree nursery, employing 12 women from her village. “This project gave me the skills and resources to become an entrepreneur while protecting our coastal forests,” she says.",
            impact: "300,000 seedlings grown annually.",
        },
        {
            organisation: "The Sahel Green Belt",
            photo: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg",
            location: "Niger",
            about:
                "Once barren land is now a productive agroforestry zone. Communities harvest sustainable timber, fruits, and medicinal plants while protecting against desertification.",
            impact: "5,000 families with improved food security.",
        },
        {
            organisation: "Youth Rangers Program",
            location: "Uganda",
            about:
                "40 young adults trained as forest rangers, combining traditional knowledge with modern monitoring technology. They earn stable incomes while protecting their heritage.",
            impact: "100% graduate employment rate.",
        },
    ]
    return (
        <div>
            <SectionHeader heading='Success Stories' caption='Real people, real transformation' leftAlign />

            <div className="flex gap-3 flex-col">
                <div className="flex gap-3">
                    {testimonials?.slice(0, 2)?.map((t, i) => (<Testimonial key={i} {...t} />))}
                </div>
                <div className="flex gap-3">
                    {testimonials?.slice(2, 4)?.map((t, i) => (<Testimonial key={i} {...t} />))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials