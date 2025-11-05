import SectionHeader from "@/components/base/SectionHeader";
import React from "react";

const About = () => {
  return (
    <div className="w-full h-[390] p-6 shadow-md font-sans flex flex-col justify-between">
      {/* Section Header */}
      <SectionHeader 
        heading={<>What is Ensigo <span className="text-primary">Trace?</span></>}
        leftAlign={true}
        className="tope-1/2 translate-y-22"
      />
      <SectionHeader
        caption={`Ensigo Trace is our proprietary technology platform that combines
blockchain, satellite imaging, IoT sensors, and mobile applications to
create an unprecedented level of transparency and accountability in
reforestation projects. Every tree planted through Ensigo Africa gets
a unique digital identity that follows it throughout its lifecycle.

This creates a permanent, tamper-proof record that partners, donors,
and stakeholders can trust. By leveraging cutting-edge technology,
we're solving one of the biggest challenges in environmental
conservation: proving impact. With Ensigo Trace, every claim is
verifiable, every tree is trackable, and every impact is measurable.`}
        leftAlign={true}

        className="tope-1/2 -translate-y-22" heading={""}      />
    </div>
  );
};

export default About;
