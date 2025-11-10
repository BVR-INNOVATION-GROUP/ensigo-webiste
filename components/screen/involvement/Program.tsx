import Button from "@/components/base/Button";
import SectionHeader from "@/components/base/SectionHeader";
import React from "react";

const Program = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch bg-[var(--foreground)]">
      {/* Left side - Full-cover image with centered overlay text */}
      <div className="relative w-full md:w-1/2 h-64 sm:h-96 md:h-auto flex items-center justify-center">
        <img
          src="/images/Rectangle 89.png"
          alt="Program visual"
          className="object-cover w-full h-full"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

        {/* Centered overlay text */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="text-[#f9f9f9] text-lg sm:text-xl md:text-2xl font-sans text-center">
            Student & Youth <br /> Programs
          </p>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-16 py-8 sm:py-12 md:py-16 gap-6">
        <SectionHeader
          heading={
            <span className="text-green-700 underline text-sm sm:text-sm md:text-sm">
              Student & Youth Programs
            </span>
          }
          caption={
            <span className="text-sm sm:text-sm md:text-sm">
              Special opportunities for students and young people to gain
              hands-on experience in environmental conservation and community
              development. Scholarships and stipends available.
            </span>
          }
          leftAlign={true}
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            title={"School Partnerships"}
            className="bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition w-full sm:w-auto"
          />

          <Button
            title={"Explore Youth Programs"}
            className="bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Program;
