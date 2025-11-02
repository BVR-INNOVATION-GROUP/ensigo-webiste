import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative bg-white font-[Poppins] text-[#000000] px-4 sm:px-10 py-6 lg:py-0">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-4">
        
        {/* Left side */}
        <div className="flex-1 flex flex-col items-center justify-center relative text-center">
          {/* Background/base image */}
          <Image
            src="/images/vector.png"
            alt="Vector"
            className="w-4/5 sm:w-3/5 lg:w-[70%] mx-auto"
            width={800}    
            height={600}   
          />

          {/* Overlay image */}
          <Image
            src="/images/Ensigo Trace.png"
            alt="Ensigo Trace Logo"
            className="absolute lg:w-[90%] w-4/5 sm:w-3/5 top-[48%] lg:top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            width={900}    
            height={600}   
            priority       
          />

          {/* Text & Button above all images */}
          <div className="mt-4 lg:absolute lg:z-10 lg:top-[68%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-3 px-2 sm:px-0">
            <p className="text-sm sm:text-base md:text-lg font-light">
              Revolutionary blockchain-powered technology bringing unprecedented
              transparency to reforestation efforts across Africa.
            </p>
            <button className="bg-[#1D7C2E] hover:bg-[#35E254] text-white font-semibold px-6 py-3 rounded-lg">
              Request Demo
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 flex justify-center sm:justify-start items-center lg:-ml-50  mt-4 lg:mt-0">
          <Image
            src="/images/phone-img.png"
            alt="Phone"
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-[45%] h-auto lg:h-[400px] object-contain"
            width={500}    
            height={400}   
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
