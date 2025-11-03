import React from "react";

const Features = () => {
  const steps = [
    {
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200",
      name: "Initiate Trace",
      description:
        "Users can easily start a trace operation through our intuitive interface. Simply input the necessary parameters and click to begin the comprehensive tracing process.",
    },
    {
      avatar: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200",
      name: "Data Collection",
      description:
        "Our system automatically gathers relevant data from multiple sources across your infrastructure. This includes network logs, system events, and transaction records in real-time.",
    },
    {
      avatar: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200",
      name: "Security Analysis",
      description:
        "Advanced security protocols analyze the collected data for potential threats, vulnerabilities, and compliance issues. Our AI-powered system identifies patterns and anomalies instantly.",
    },
    {
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200",
      name: "Results Display",
      description:
        "Comprehensive results are presented in an easy-to-understand dashboard with visualizations, detailed reports, and actionable insights for your team to review and act upon.",
    },
  ];

  return (
    <div className="p-8 w-full mx-auto bg-black font-sans opacity-88">
      <h1 className="text-white w-[95%] mx-auto text-3xl font-bold mb-8 ">
        Key <span className="text-green-800">Features</span>
      </h1>

      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex gap-4 p-6 border border-gray-700 rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-shadow bg-gray-900"
          >
            <img
              src={step.avatar}
              alt={step.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.name}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
