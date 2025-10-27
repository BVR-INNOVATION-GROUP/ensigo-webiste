import Container from '@/components/base/Container'
import Hero from '@/components/screen/about/Hero'
import Story from '@/components/screen/about/Story'
import Team from '@/components/screen/about/Team'
import Values from '@/components/screen/about/Values'
import Vision from '@/components/screen/about/Vision'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <div className='relative'>
                <Container className='pb-[6rem]'>
                    <Vision />
                </Container>
                <img src="https://res.cloudinary.com/dauv815j5/image/upload/v1761486850/Vector_8_aijxov.svg" alt="" className="absolute -z-[400] bottom-0 left-0" />

            </div>

            <Container className='py-[6rem]'>
                <Values />
            </Container>
            <Container className='py-[6rem]'>
                <Story />
            </Container>
            <Container className='py-[6rem]'>
                <Team />
            </Container>


        </div>
    )
}

export default page