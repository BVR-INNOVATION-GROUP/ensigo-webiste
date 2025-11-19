import IconCardInline, { IconCardInlineI } from '@/components/base/IconCardInline'
import SectionHeader from '@/components/base/SectionHeader'
import { ClipboardClock, LocateFixed, Trees, Users } from 'lucide-react'

const Approach = () => {

    const values: IconCardInlineI[] = [
        {
            icon: <Users />,
            title: "Community-Led Implementation",
            paragraph: 'Local communities are at the heart of every project, ensuring cultural relevance and long-term sustainability.'
        },
        {
            icon: <Trees />,
            title: "Native Species Selection",
            paragraph: 'We prioritize indigenous tree species that restore natural ecosystems and provide economic value.'
        },
        {
            icon: <ClipboardClock />,
            title: "Continuous Monitoring",
            paragraph: "Using Ensigo Trace technology to track growth, survival rates, and environmental impact in real-time."
        },
        {
            icon: <LocateFixed />,
            title: "Strategic Site Selection",
            paragraph: 'Data-driven approach to identify areas where reforestation will have the greatest environmental impact.'
        },
    ]

    return (
        <div className='py-[5vw] pt-[20vw]'>
            <div className='bg-paper rounded border p-[5vw]  border-white'>
                <SectionHeader leftAlign heading='OUR APPROACH' />
                <div className="flex flex-col gap-3">

                    <div className="Sm:flex gap-3">
                        {values?.slice(0, 2)?.map((v, i) => <IconCardInline {...v} key={i} />)}
                    </div>
                    <div className="Sm:flex gap-3">
                        {values?.slice(2, 4)?.map((v, i) => <IconCardInline {...v} key={i} />)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Approach