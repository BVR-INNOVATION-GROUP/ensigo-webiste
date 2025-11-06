import React from "react";
import SectionHeader from "@/components/base/SectionHeader";

const ActiveHours = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center">
      {/* Background Image */}
      <div className="bg-[url(https://images.pexels.com/photos/5244076/pexels-photo-5244076.jpeg)] relative bg-center bg-cover h-[50vh] w-full">
        <div className="bg-black/40 absolute top-0 left-0 w-full h-full backdrop-blur-md"></div>
      </div>

      {/* Content */}
      <div className="absolute z-10 flex flex-col items-center gap-4 px-6">
        <SectionHeader
          heading={<span className="text-[#FFFFFF]">Office Hours</span>}
          leftAlign={false}
          caption={
            <>
              <span className="text-[#F9F9F9]/90 block">
                Monday - Friday: 8:00 AM - 6:00 PM (EAT)
              </span>
              <span className="text-[#F9F9F9]/90 block">
                Saturday: 9:00 AM - 2:00 PM (EAT)
              </span>
              <span className="text-[#F9F9F9]/90 block">
                Sunday: Closed
              </span>
              <span className="text-[#F9F9F9]/50 block">
                Emergency inquiries: Available 24/7 via email
              </span>
            </>
          }
        />
      </div>
    </div>
  );
};

export default ActiveHours;
