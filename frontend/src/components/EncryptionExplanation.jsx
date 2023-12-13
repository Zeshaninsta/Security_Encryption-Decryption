import React from "react";
import { FaLock, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const EncryptionExplanation = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly p-5 gap-5">
      {/* Div for Caesar Cipher Explanation */}
      <div className="flex flex-col justify-center items-center  border border-gray-100 p-3">
        <FaLock className="text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Caesar Cipher</h3>
        <p className="text-gray-700">
          Caesar Cipher is a substitution cipher where each letter in the
          plaintext is shifted a certain number of places down the alphabet. In
          simple terms, it's like a "shift-by-N" encryption.
        </p>
        <Link
          to="/caesar-explanation"
          className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800 text-sm font-bold"
        >
          Learn More
        </Link>
      </div>

      {/* Div for Custom Cipher Explanation */}
      <div className="flex flex-col justify-center items-center border border-gray-100 p-3">
        <FaCog className="text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Custom Cipher</h3>
        <p className="text-gray-700">
          Custom Cipher, on the other hand, involves a personalized algorithm
          for encrypting and decrypting messages. It could be a unique
          combination of various encryption techniques to enhance security.
        </p>
        <Link
          to="/custom-explanation"
          className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800 text-sm font-bold"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EncryptionExplanation;
