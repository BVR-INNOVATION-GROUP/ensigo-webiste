import SectionHeader from "@/components/base/SectionHeader";
import React from "react";

const About = () => {
  return (
    <div className=" px-6 md:px-16 py-29 flex flex-col gap-6 md:gap-10">
      {/* Section Header */}
      <SectionHeader
        heading={
          <span>
            What is Ensigo <span className="text-primary">Trace?</span>
          </span>
        }
        leftAlign={true}
      />

      {/* Caption Text */}
      <SectionHeader heading="" 
       caption={<span className="leading-relaxed text-sm  max-w-4xl font-sans">
        Ensigo Trace is our proprietary technology platform that combines
        blockchain, satellite imaging, IoT sensors, and mobile applications to
        create an unprecedented level of transparency and accountability in
        reforestation projects. Every tree planted through Ensigo Africa gets a
        unique digital identity that follows it throughout its lifecycle.
        <br />
        <br />
        This creates a permanent, tamper-proof record that partners, donors, and
        stakeholders can trust. By leveraging cutting-edge technology, we are
        solving one of the biggest challenges in environmental conservation:
        proving impact. With Ensigo Trace, every claim is verifiable, every tree
        is trackable, and every impact is measurable.
      </span>}
      leftAlign={true}
      />
    </div>
    
  );
};

export default About;
