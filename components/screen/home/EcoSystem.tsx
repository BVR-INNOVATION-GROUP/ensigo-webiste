import Container from '@/components/base/Container'
import SectionHeader from '@/components/base/SectionHeader'
import Image from 'next/image'
import React from 'react'

const EcoSystem = () => {


    return (
        <div className='py-[6rem] bg-paper'>
            <Container className='flex flex-col items-center justify-center'>
                <SectionHeader heading='The Ensigo Ecosystem' caption='Connecting communities, nurseries, and technology to restore nature and livelihoods' />
                <img alt='eco system chart' className='transform scale-[.65]' src={"https://res.cloudinary.com/dauv815j5/image/upload/v1761409897/Group_93_psrbjq.svg"} />
            </Container>
        </div>
    )
}

export default EcoSystem