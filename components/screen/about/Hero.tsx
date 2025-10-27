import Button from '@/components/base/Button'
import { Video } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className='h-[100vh] -z-40  text-center flex flex-col items-center justify-center relative w-full '>




            <h1 className="text-8xl uppercase bg-center bg-clip-text text-transparent bg-cover bg-[url(https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg)] font-impact ">
                ABOUT ENSIGO AFRICA
            </h1>

            <p className='max-w-[50vw] my-10'>Pioneering sustainable solutions for Africa's environmental challenges through innovation, community engagement, and transparent impact tracking.</p>

            <div className="flex items-center gap-4">
                <Button title='Explore Ensigo Trace' variant='fill' color='dark' />

            </div>
        </div>
    )
}

export default Hero