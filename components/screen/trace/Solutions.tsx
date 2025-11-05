import React from "react";
import { Check } from "lucide-react";
import SectionHeader from "@/components/base/SectionHeader";

const Solutions = () => {
  const solutions = [
    {
      title: "Partners & Donors",
      features: [
        "Complete transparency on fund utilization",
        "Real-time project progress updates",
        "Verified carbon offset certificates",
        "Detailed impact reports",
      ],
    },
    {
      title: "Local Communities",
      features: [
        "Complete transparency on fund utilization",
        "Real-time project progress updates",
        "Verified carbon offset certificates",
        "Detailed impact reports",
      ],
    },
    {
      title: "Researchers",
      features: [
        "Complete transparency on fund utilization",
        "Real-time project progress updates",
        "Verified carbon offset certificates",
        "Detailed impact reports",
      ],
    },
  ];

  return (
    <div className="bg-[#008000] min-h-screen p-10 text-white flex flex-col items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-center gap-8">
        {/* Section Header */}
        <SectionHeader heading="Our Solutions" leftAlign={false} />

        {/* Top two containers */}
        <div className="flex justify-center gap-8 w-full">
          {solutions.slice(0, 2).map((solution, index) => (
            <div
              key={index}
              className="bg-[#1C732C] p-6 w-full md:w-5/12 max-w-sm transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-3 text-white">{solution.title}</h2>
              <div className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-300 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom centered container */}
        <div className="flex justify-center w-full">
          {solutions.slice(2, 3).map((solution, index) => (
            <div
              key={index}
              className="bg-[#1C732C] p-6 w-full md:w-5/12 max-w-sm transition-all duration-300 "
            >
              <h2 className="text-2xl font-bold mb-3 text-white">{solution.title}</h2>
              <div className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-300 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
