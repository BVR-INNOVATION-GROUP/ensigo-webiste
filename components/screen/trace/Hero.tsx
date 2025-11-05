import React from "react";
import Image from "next/image";
import Button from "@/components/base/Button";
import SectionHeader from "@/components/base/SectionHeader";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center font-[Poppins] text-white">
      {/* Background Image */}
      <Image
        src="/images/forest-bg.png" 
        alt="Background"
        fill
        className="object-cover"
        priority
      />


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-impact">
          Ensigo Trace
        </h1>

        {/* Caption (from SectionHeader) */}
        <SectionHeader
          caption="Revolutionary blockchain-powered technology bringing unprecedented transparency to reforestation efforts across Africa"
          heading={""}
        />

        {/* Button (using custom Button component) */}
        <Button
          title="Request Demo"
          variant="fill"
          color="primary"
          className="text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-[#35E254]"
        />
      </div>
    </div>
  );
};

export default Hero;
