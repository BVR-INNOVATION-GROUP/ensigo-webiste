import SectionHeader from "@/components/base/SectionHeader";
import React from "react";

const FunctionW = () => {
  const steps = [
    {
      heading: "Tree Registration",
      caption:
        "At planting, each tree is tagged with a unique QR code and registered in our system with GPS coordinates, species information, and planting date.",
    },
    {
      heading: "Continuous Monitoring",
      caption:
        "Regular ground surveys combined with satellite imagery track growth progress, health status, and survival rates.",
    },
    {
      heading: "Blockchain Recording",
      caption:
        "All data points are cryptographically sealed on the blockchain, creating an immutable record that cannot be altered or manipulated.",
    },
    {
      heading: "Transparent Reporting",
      caption:
        "Stakeholders access real-time dashboards showing verified impact metrics, growth statistics, and environmental benefits.",
    },
  ];

  return (
    <div className="w-full px-4 py-20 flex flex-col justify-center">
      {/* Section Header */}
      <div className="mb-4">
        <SectionHeader heading="How Ensigo Trace Works" leftAlign={true} />
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            {/* Number */}
            <span className=" underline text-black/40 min-w-[32px]">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="">
              <h3>{step.heading}</h3>
              <SectionHeader
                caption={step.caption}
                heading
                leftAlign={true}
                className="text-black/40"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionW;
