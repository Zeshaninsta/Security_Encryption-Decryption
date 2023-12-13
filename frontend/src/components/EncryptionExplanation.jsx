import React from "react";
import { FaLock, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const EncryptionExplanation = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-around py-12">
      {/* Div for Caesar Cipher Explanation */}
      <div className="flex flex-col justify-center items-center">
        <FaLock className="text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Caesar Cipher</h3>
        <p className="text-gray-700">
          Caesar Cipher is a substitution cipher where each letter in the
          plaintext is shifted a certain number of places down the alphabet. In
          simple terms, it's like a "shift-by-N" encryption.
        </p>
        <Link
          to="/caesar-explanation"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
        >
          Learn More
        </Link>
      </div>

      {/* Div for Custom Cipher Explanation */}
      <div className="flex flex-col justify-center items-center">
        <FaCog className="text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Custom Cipher</h3>
        <p className="text-gray-700">
          Custom Cipher, on the other hand, involves a personalized algorithm
          for encrypting and decrypting messages. It could be a unique
          combination of various encryption techniques to enhance security.
        </p>
        <Link
          to="/custom-explanation"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EncryptionExplanation;
