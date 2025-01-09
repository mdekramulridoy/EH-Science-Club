import React from "react";
import Slider from "../Slider";

const Contact = () => {
  return (
    <div className="min-h-screen mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col items-center lg:h-[500px]">
        <Slider></Slider>
      </div>
      {/* Slider division */}
      <div>
        <h1 className="text-center my-6 font-bold text-3xl">Facebook Page</h1>
      </div>
    </div>
  );
};

export default Contact;
