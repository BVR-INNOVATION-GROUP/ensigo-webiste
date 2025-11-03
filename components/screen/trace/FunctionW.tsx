import React from "react";

const FunctionW = () => {
  const steps = [
    {
      title: "Tree Registration",
      description:
        "At planting, each tree is tagged with a unique QR code and registered in our system with GPS coordinates, species information, and planting date.",
    },
    {
      title: "Continuous Monitoring",
      description:
        "Regular ground surveys combined with satellite imagery track growth progress, health status, and survival rates.",
    },
    {
      title: "Blockchain Recording",
      description:
        "All data points are cryptographically sealed on the blockchain, creating an immutable record that cannot be altered or manipulated.",
    },
    {
      title: "Transparent Reporting",
      description:
        "Stakeholders access real-time dashboards showing verified impact metrics, growth statistics, and environmental benefits.",
    },
  ];

  return (
    <div className="p-8 w-[95%] mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-8 text-black ">
        How Ensigo Trace Works
      </h1>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Number */}
            <span className="text-xl font-semibold underline text-black opacity-30">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="flex-grow">
              <h2 className="text-lg font-semibold text-black opacity-100">
                {step.title}
              </h2>
              <p className="text-base text-black opacity-50">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionW;
