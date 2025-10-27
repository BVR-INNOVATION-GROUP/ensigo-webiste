const Hero = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center">

            <div className="bg-paper h-[75vh] flex rounded-2xl p-6">

                <div className="w-[40%] h-full bg-cover bg-center rounded-xl bg-[url(https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg)]"></div>

                <div className="w-[60%] flex px-[5vw] flex-col justify-center">

                    <h1 className="text-6xl font-impact uppercase mb-8">our <span className='relative '><span>Impact</span><span className='h-1 -bottom-2 right-0 bg-secondary rounded-full w-full absolute'></span></span></h1>
                    <p className="max-w-[80%]">Measurable environmental restoration and community transformation across Africa</p>


                </div>

            </div>

        </div>

    )
}

export default Hero