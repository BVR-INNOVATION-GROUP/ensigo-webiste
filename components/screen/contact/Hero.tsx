import Container from "@/components/base/Container";
import React from "react";
import ContactUs from "./ContactUs";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="relative w-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[80vh] xl:min-h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5244076/pexels-photo-5244076.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Section */}
      <Container>
        <div className="bg-paper relative -translate-y-1/4 sm:-translate-y-1/6 md:-translate-y-1/5 p-6 sm:p-12 md:p-[10vh] rounded-lg w-full">
          <ContactUs />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
