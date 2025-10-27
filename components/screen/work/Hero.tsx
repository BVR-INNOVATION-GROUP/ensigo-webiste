import Image from 'next/image'
import React from 'react'
import HeroStatistics from './HeroStatistics'

const Hero = () => {
    return (

        <div className="h-[100vh] relative flex items-center justify-center gap-6 ">
            <Image src={"https://res.cloudinary.com/dauv815j5/image/upload/v1761561178/Mask_group_hzqzgf.svg"} height={500} width={500} alt='tree' />
            <div>
                <h1 className="font-serif uppercase text-4xl">our work across <br /><span className='text-8xl  font-impact '>Africa</span> </h1>
            </div>

            <HeroStatistics />
        </div>
    )
}

export default Hero