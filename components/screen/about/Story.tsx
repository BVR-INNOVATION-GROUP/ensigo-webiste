import React from 'react'

const Story = () => {
    return (
        <div className='pt-[5vw]'>

            <div className='bg-paper p-[5vw] relative rounded'>
                {/* headline  */}
                <h1 className="text-7xl absolute top-[-15%] left-[50%] w-max transform translate-x-[-50%] uppercase bg-[url(https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg)] bg-center bg-cover  text-transparent font-impact bg-clip-text">
                    our story
                </h1>

                {/* paragraph  */}
                <p className='text-justify'>Ensigo Africa was born from a simple yet powerful observation: Africa's forests are disappearing at an alarming rate, but the communities most affected often lack the resources and support to reverse this trend.
                    Founded in 2020, we set out to bridge this gap by creating a comprehensive ecosystem that connects local communities with global partners, traditional knowledge with modern technology, and environmental action with economic opportunity.
                    Today, we've planted over 500,000 trees across multiple African countries, working hand-in-hand with local communities to ensure every sapling has the best chance to grow into a thriving part of our restored forests.
                    Our proprietary Ensigo Trace technology brings unprecedented transparency to reforestation efforts, allowing partners and supporters to track the journey of each tree from seed to forest canopy.</p>

            </div>

        </div>
    )
}

export default Story