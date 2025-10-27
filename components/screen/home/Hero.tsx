import Button from '@/components/base/Button'
import { Video } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className='h-[100vh] -z-40 text-white text-center flex flex-col items-center justify-center relative w-full bg-center bg-cover bg-[url(https://images.pexels.com/photos/27627366/pexels-photo-27627366.jpeg)]'>

            {/* overlay  */}
            <div className='absolute -z-10 w-full h-full bg-black/30' />


            <h1 className="text-4xl  font-serif max-w-[40vw]">
                Restoring Biodiversity through  Africa's Native Tree Seed System
            </h1>

            <p className='max-w-[50vw] my-10'>Millions of trees are planted every year across Africa — yet too few survive. Ensigo Africa is fixing that by building a tech-driven native seed network that ensures every tree planted is traceable, viable, and ecologically appropriate.</p>

            <div className="flex items-center gap-4">
                <Button title='Explore Ensigo Trace' variant='fill' color='dark' />
                <Button title='Explore Ensigo Trace' variant='outline-bottom' leftIcon={<Video />} />
            </div>
        </div>
    )
}

export default Hero