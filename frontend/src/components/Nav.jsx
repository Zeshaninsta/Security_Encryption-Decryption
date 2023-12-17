import React, { useState } from "react";
import SubscribeCard from "./SubscribeCard";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-blue-900 text-white py-4 px-5 border-b-2 border-gray-400">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Section 1: ETE CipherCraft Text */}
        <div className="text:md lg:text-lg font-semibold">
          <span className="text-yellow-400">ETE</span> CipherCraft
        </div>

        {/* Section 2: Necessary Links */}
        <div
          className={`hidden md:flex space-x-4 ${
            isMobileMenuOpen ? "hidden" : ""
          }`}
        >
          <Link to="/" className="text-gray-200 hover:text-gray-300">
            Home
          </Link>
          <Link to="/About" className="text-gray-200 hover:text-gray-300">
            About
          </Link>
          <NavLink
            smooth
            duration={500}
            offset={-50}
            to="Home/Services"
            className="text-gray-200 hover:text-gray-300"
          >
            Services
          </NavLink>
          <Link to="/Contact" className="text-gray-200 hover:text-gray-300">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 relative">
          <SubscribeCard />
        </div>
        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden ml-4">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-3xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Menu (Displayed on Mobile) */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-16 h-screen right-0 w-full text-white bg-blue-900">
            <div className="border-b-2 border-gray-300 mb-5">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-blue-800"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="/About"
                className="block px-4 py-2 hover:bg-blue-800"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <NavLink
                smooth
                duration={500}
                offset={-50}
                to="Home/Services"
                className="block px-4 py-2 hover:bg-blue-800"
                onClick={handleLinkClick}
              >
                Services
              </NavLink>
              <Link
                to="/Contact"
                className="block px-4 py-2 hover:bg-blue-800"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>
            <div className="mt-5">
              {/* Form for Mobile */}
              <form className="mt-4 px-4">
                <label className="block font-medium text-white text-center text-3xl mb-5">
                  Subscribe to Newsletter:
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border text-gray-600 outline-none border-gray-300 rounded-md mb-2"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
