import Button from '@/components/base/Button'
import { IconCardI } from '@/components/base/IconCard'
import IconCardGrid from '@/components/base/IconCardGrid'
import SectionHeader from '@/components/base/SectionHeader'
import { ChartColumnDecreasing, Eye, LayoutDashboard, MapPinned, TabletSmartphone, Webhook } from 'lucide-react'
import React from 'react'

const EnsigoTrace = () => {


    const traces: IconCardI[] = [
        {
            icon: <MapPinned />,
            h2: "Geotagged Provenance",
            paragraph: "Each seed batch linked to its mother tree"
        },
        {
            icon: <TabletSmartphone />,
            h2: "Field Collection App",
            paragraph: "Offline-first mobile data capture"
        },
        {
            icon: <LayoutDashboard />,
            h2: "Nursery Dashboard",
            paragraph: "Track germination and inventory"
        },
        {
            icon: <ChartColumnDecreasing />,
            h2: "Partner Analytics",
            paragraph: "Interactive restoration dashboards"
        },
        {
            icon: <Webhook />,
            h2: "Open API",
            paragraph: "Integration with carbon registries"
        },
        {
            icon: <Eye />,
            h2: "Public Transparency",
            paragraph: "Verified impact visualization"
        },
    ]


    return (
        <div>
            <SectionHeader heading='Ensigo Trace' caption='Our digital backbone tracks every seed from its origin to where it grows, turning restoration into measurable impact.' />

            <IconCardGrid leftAlign data={traces.slice(0, 3)} className='mb-4' />
            <IconCardGrid leftAlign data={traces.slice(3, 6)} />

            <div className="flex flex-col items-center gap-3 mt-8">
                <p className='text-center  opacity-50'>“Restoration, Powered by Data”</p>
                <Button title='Explore EnsigoTrace Platform' variant='fill' className='rounded-full' />
            </div>
        </div>
    )
}

export default EnsigoTrace