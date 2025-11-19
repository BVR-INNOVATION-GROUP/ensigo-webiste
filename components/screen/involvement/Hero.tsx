import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-[100vh] bg-[url('https://images.pexels.com/photos/6590919/pexels-photo-6590919.jpeg')] 
                 bg-cover bg-right bg-no-repeat text-white flex flex-col items-center justify-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Text content in front */}
      <div className="relative z-10 text-center">
        <h2 className="sm:text-8xl  text-7xl font-impact">
          <span className="opacity-30">GET</span> INVOLVED
        </h2>
        <p className="mt-6 sm:max-w-[40%] max-w-[80%] mx-auto">
          Join thousands of individuals and organizations making a real
          difference in Africa's environmental future
        </p>
      </div>
    </div>
  );
};

export default Hero;
