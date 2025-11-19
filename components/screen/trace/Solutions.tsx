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
    <div className="bg-primary min-h-screen py-15 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col items-center gap-4 py-4">
        {/* Section Header */}
        <SectionHeader heading="Our Solutions" leftAlign={false} />

        {/* Top two containers */}
        <div className="flex justify-center flex flex-col md:flex-row gap-4 w-full">
          {solutions.slice(0, 2).map((solution, index) => (
            <div
              key={index}
              className="bg-[var(--primary-dark)] p-6 w-full md:w-5/12 max-w-sm transition-all duration-300"
            >
              <h2 className="font-bold mb-3">{solution.title}</h2>
              <div className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <p>{feature}</p>
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
              className="bg-[var(--primary-dark)] p-6 w-full md:w-5/12 max-w-sm mx-auto md:mx-0 transition-all duration-300 "
            >
              <h2 className="font-bold mb-3 ">{solution.title}</h2>
              <div className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <p>{feature}</p>
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
