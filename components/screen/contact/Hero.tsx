import Container from "@/components/base/Container";
import React from "react";
import ContactUs from "./ContactUs";
import { div } from "framer-motion/client";

const Hero = () => {
  return (

    // main container 
    <div className=" relative  h-screen">

       <div style={{
        backgroundPositionY: -600
       }} className="bg-[url(https://images.pexels.com/photos/5244076/pexels-photo-5244076.jpeg)] bg-center bg-cover h-[60vh] w-full">

        <div className="bg-black/40 absolute left-0 top-0 w-full h-[60vh]"></div>


       </div>

      {/* floating section  */}
      <div className="bg-paper transform translate-y-[-30%] p-[10vh] h-[50vh] mx-[5vw] rounded-lg">
        <ContactUs/>
      </div>
    </div>

  );
};

export default Hero;
