import SectionHeader from "@/components/base/SectionHeader";
import {
  SatelliteDish,
  AudioWaveform,
  ChartNoAxesCombined,
  ClipboardClock,
} from "lucide-react";
import React from "react";

const Features = () => {
  const steps = [
    {
      name: "Satellite Monitoring",
      description:
        "Local communities are at the heart of every project, ensuring cultural relevance and long-term sustainability.",
      icon: <SatelliteDish className="w-4 h-4 text-white" />,
    },
    {
      name: "Real-Time Data",
      description:
        "Advanced satellite imagery tracks forest health, growth rates, and environmental impact over time.",
      icon: <AudioWaveform className="w-4 h-4 text-white" />,
    },
    {
      name: "Impact Analytics",
      description:
        "Comprehensive dashboards showing environmental and social impact metrics.",
      icon: <ChartNoAxesCombined className="w-4 h-4 text-white" />,
    },
    {
      name: "Species Tracking",
      description:
        "Monitor biodiversity improvements and track individual species populations.",
      icon: <ClipboardClock className="w-4 h-4 text-white" />,
    },
  ];

  return (
    <div
      className="min-h-[600px] px-6 sm:px-10 py-16 relative font-sans"
      style={{ backgroundColor: "var(--dark)" }}
    >
      {/* Key Features heading at top-left */}
      <h3 className="absolute top-6 left-6 font-semibold text-white text-xl">
        <span className="text-primary">Key</span> Features
      </h3>

      {/* Features Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start gap-3 p-8 rounded-lg text-left transition-transform transform "
            style={{ backgroundColor: "var(--very-dark-color)" }}
          >
            {/* Feature name and icon */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#393939] flex items-center justify-center flex-shrink-0">
                {step.icon}
              </span>
              <h4 className="font-semibold text-xl text-white">{step.name}</h4>
            </div>

            {/* Feature description */}
            <p className="text-gray-400 leading-relaxed text-[15px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* View all at bottom-right */}
      <h3 className="absolute bottom-6 right-6 underline font-sans text-xl text-primary cursor-pointer hover:text-primary/80">
        view all
      </h3>
    </div>
  );
};

export default Features;
