import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-5">
      <div className="flex-col md:flex-row flex justify-between gap-5 p-5 items-center border-b border-white">
        <div className="font-bold text-4xl lg:text-lg">
          <span className="text-yellow-400">ETE</span> CipherCraft
        </div>
        {/* Left Side: Social Media Links */}
        <div className="text-center">
          <blockquote className="italic text-lg">
            "The only way to do great work is to love what you do."
          </blockquote>
          <p className="mt-2">- Steve Jobs</p>
        </div>

        {/* links */}
        <div className="flex items-center justify-around gap-5">
          <a href="#" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Middle: Newsletter Subscription Form */}
      <div className="flex flex-col justify-center items-center mt-2">
        <h3 className="text-lg font-semibold mb-4">
          Subscribe to Our Newsletter
        </h3>
        <form className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className=" outline-none text-gray-600  p-2"
          />
          <button type="submit" className="bg-yellow-400 text-blue-900 p-2">
            Subscribe
          </button>
        </form>
      </div>

      {/* Right Side: Inspiring Quotes */}
    </footer>
  );
};

export default Footer;
