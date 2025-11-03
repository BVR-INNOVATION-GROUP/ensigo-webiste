import React from "react";

const About = () => {
  return (
    <div className="w-full mx-auto p-6 shadow-md rounded-lg space-y-6 font-sans">
      {/* Heading */}
      <div>
        <p className="text-3xl md:text-4xl font-bold text-gray-800">
          What is <span className="text-green-800">Ensigo?</span>
        </p>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Ensigo Trace is our proprietary technology platform that combines
          blockchain, satellite imaging, IoT sensors, and mobile applications to
          create an unprecedented level of transparency and accountability in
          reforestation projects. Every tree planted through Ensigo Africa gets
          a unique digital identity that follows it throughout its lifecycle.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          This creates a permanent, tamper-proof record that partners, donors,
          and stakeholders can trust. By leveraging cutting-edge technology,
          we're solving one of the biggest challenges in environmental
          conservation: proving impact. With Ensigo Trace, every claim is
          verifiable, every tree is trackable, and every impact is measurable.
        </p>
      </div>
    </div>
  );
};

export default About;
