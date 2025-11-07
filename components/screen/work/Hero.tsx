import Image from "next/image";
import React from "react";
import HeroStatistics from "./HeroStatistics";

const Hero = () => {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 px-4 sm:px-8 py-10 sm:py-0 h-auto sm:h-[100vh]">
      {/* Image */}
      <div className="flex justify-center sm:justify-center w-full sm:w-auto">
        <Image
          src="https://res.cloudinary.com/dauv815j5/image/upload/v1761561178/Mask_group_hzqzgf.svg"
          height={500}
          width={500}
          alt="tree"
          className="w-[70%] sm:w-[500px] h-auto"
          priority
        />
      </div>

      {/* Text */}
      <div className="text-center sm:text-left mt-6 sm:mt-0 px-2 sm:px-0">
        <h1 className="font-serif uppercase text-3xl sm:text-4xl md:text-5xl leading-snug">
          our work across <br />
          <span className="text-6xl sm:text-8xl font-impact">Africa</span>
        </h1>
      </div>

      {/* Hero Statistics */}
      <div className="mt-6 sm:mt-0">
        <HeroStatistics />
      </div>
    </div>
  );
};

export default Hero;
