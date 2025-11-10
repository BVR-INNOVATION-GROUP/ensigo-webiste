import Button from "@/components/base/Button";
import SectionHeader from "@/components/base/SectionHeader";
import React from "react";

const Change = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch bg-[var(--foreground)]">
        {/* Left side  */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-16 py-12 md:py-16 gap-6">
          <SectionHeader
            heading={
              <span className="text-green-700 text-xl sm:text-xl md:text-xl">
                Ready to Make a Difference?
              </span>
            }
            caption={
              <span className="text-sm sm:text-sm md:text-sm">
                Whether you can give time, resources, or expertise — there’s a
                place for you in our mission.
              </span>
            }
            leftAlign={true}
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              title={"Explore Youth Programs"}
              className="bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="relative w-full md:w-1/2 h-64 sm:h-96 md:h-auto">
          <img
            src="https://images.pexels.com/photos/9169913/pexels-photo-9169913.jpeg"
            alt="Program visual"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
  );
};

export default Change;
