import SectionHeader from "@/components/base/SectionHeader";
import React from "react";

const Experience = () => {
  return (
    <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16 font-sans">
       <SectionHeader
       heading="Experience Ensigo Trace"
       caption="See how our technology can bring transparency to your reforestation initiatives."
       leftAlign={false}
       />

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[var(--primary-dark)] text-[var(--foreground)] px-8 py-3 rounded-full transition-all duration-300 shadow-md">
          Schedule a Demo
        </button>
        <button className="border-2 border-primary text-primary px-8 py-3 rounded-full transition-all duration-300">
          Download White Paper
        </button>
      </div>
    </div>
  );
};

export default Experience;
