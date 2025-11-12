import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 w-full bg-[var(--foreground)]">

      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl">Contact Us</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We would love to hear from you. Reach out to discuss partnerships, volunteering, or any questions about our work.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
          alt="Contact illustration"
          className="object-cover h-[30vh] w-[30vh] sm:h-[35vh] sm:w-[35vh] md:h-[45vh] md:w-[45vh] lg:h-[55vh] lg:w-[55vh] rounded-xl"
        />
      </div>

    </div>
  );
};

export default ContactUs;
