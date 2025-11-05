import React from "react";

const ContactUs = () => {
  return (
  
      <div className=" flex flex-col md:flex-row items-center justify-between ">
        
        {/* Left Side - Text */}
        <div className="w-[40%]">
          {/* <SectionHeader
            heading="Get in Touch"
            caption="We'd love to hear from you. Reach out to discuss partnerships, volunteering, or any questions about our work."
            leftAlign={true}
          /> */}
        <h1 className="text-4xl">Contact Us</h1>
        <p className="mt-2">We'd love to hear from you. Reach out to discuss partnerships, volunteering, or any questions about our work.</p>
        </div>

        {/* Right Side - Image */}
       
          <img
            src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
            alt="Contact illustration"
           
            // height={400}
            className="object-cover h-[30vh] w-[30vh] object-cover rounded-xl"
          />
   
      </div>
  );
};

export default ContactUs;
