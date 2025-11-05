import SectionHeader from "@/components/base/SectionHeader";
import React from "react";

const Features = () => {
  const steps = [
    {
      name: "Initiate Trace",
      description:
        "Users can easily start a trace operation through our intuitive interface. Simply input the necessary parameters and click to begin the comprehensive tracing process.",
    },
    {
      name: "Data Collection",
      description:
        "Our system automatically gathers relevant data from multiple sources across your infrastructure. This includes network logs, system events, and transaction records in real-time.",
    },
    {
      name: "Security Analysis",
      description:
        "Advanced security protocols analyze the collected data for potential threats, vulnerabilities, and compliance issues. Our AI-powered system identifies patterns and anomalies instantly.",
    },
    {
      name: "Results Display",
      description:
        "Comprehensive results are presented in an easy-to-understand dashboard with visualizations, detailed reports, and actionable insights for your team to review and act upon.",
    },
  ];

  return (
    <div
      className="w-full min-h-[600px] px-6 sm:px-10 py-16 relative font-sans"
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
            className="flex flex-col items-start justify-start gap-3 p-8 rounded-lg text-left"
            style={{ backgroundColor: "var(--very-dark-color)" }}
          >
            {/* Feature name */}
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-gray-400 flex-shrink-0"></span>
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
      <h3 className="absolute bottom-6 right-6 underline font-sans text-xl text-primary cursor-pointer">
        view all
      </h3>
    </div>
  );
};

export default Features;
