import React from "react";
import SectionHeader from "@/components/base/SectionHeader";

const ActiveHours = () => {
  return (
    <div className="relative  flex flex-col items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="bg-[url(https://images.pexels.com/photos/5244076/pexels-photo-5244076.jpeg)] relative bg-center bg-cover h-[50vh] w-full">
       
        <div className="bg-black/40 absolute top-0 left-0 w-full h-full backdrop-blur-md"></div>
       
        </div>

{/* Content */}
      <div className="absolute z-10 flex flex-col items-center gap-6 px-6">
        {/* Title */}     
        <SectionHeader 
          heading={"Office Hours"}
          leftAlign={false}
        />

        {/* Caption (from SectionHeader) */}
        <SectionHeader
          caption="Revolutionary blockchain-powered technology bringing unprecedented transparency to reforestation efforts across Africa"
          heading={""}
        />
      </div>


      
    </div>
  );
};

export default ActiveHours;
