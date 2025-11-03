import React from "react";

const Experience = () => {
  return (
    <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
        Experience Ensigo Trace
      </h1>

      <p className="text-gray-500 max-w-2xl mb-8 text-lg leading-relaxed">
        See how our technology can bring transparency to your reforestation initiatives.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-green-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-md">
          Schedule a Demo
        </button>
        <button className="border-2 border-green-800 text-green-800 font-semibold px-8 py-3 rounded-full hover:bg-green-50 transition-all duration-300">
          Download White Paper
        </button>
      </div>
    </div>
  );
};

export default Experience;
