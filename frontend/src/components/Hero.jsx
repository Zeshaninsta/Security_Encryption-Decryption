import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-5">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlock the Art of Secure Communication
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore ETE CipherCraft - Your Gateway to Cutting-Edge Encryption
          Technology.
        </p>
        <div className="flex justify-center">
          <NavLink
            smooth
            duration={500}
            offset={-50}
            to="Home/SecondPage"
            className="bg-white text-blue-900 py-2 px-4 rounded-full font-semibold hover:bg-gray-200"
          >
            Explore CipherCraft
          </NavLink>
        </div>
      </div>

      {/* Second page */}
    </div>
  );
};

export default Hero;
