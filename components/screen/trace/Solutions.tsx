import React from "react";
import { Check } from "lucide-react";

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
        " Real-time project progress updates",
        "Verified carbon offset certificates",
        "Detailed impact reports",
      ],
    },
  ];

  return (
<div className="bg-[#008000] min-h-screen p-10 text-white flex flex-col items-center font-sans">
  <div className="max-w-7xl w-full">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
    </div>

    {/* Top two containers */}
    <div className="flex justify-center gap-8 relative z-10">
      {solutions.slice(0, 2).map((solution, index) => (
        <div
          key={index}
          className="bg-[#1C732C] p-8 rounded-xl w-full md:w-1/2 max-w-md transition-all duration-300 hover:shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3 text-white">
            {solution.title}
          </h2>

          <div className="space-y-3">
            {solution.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-gray-300 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Bottom centered container (with spacing) */}
    <div className="flex justify-center mt-16">
      {solutions.slice(2, 3).map((solution, index) => (
        <div
          key={index}
          className="bg-[#1C732C] p-8 rounded-xl w-full md:w-1/2 max-w-md transition-all duration-300 hover:shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3 text-white">
            {solution.title}
          </h2>

          <div className="space-y-3">
            {solution.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5">
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
