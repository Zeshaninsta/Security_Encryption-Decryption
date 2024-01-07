import React from "react";
import { FaLock, FaKey, FaUndo, FaArrowRight } from "react-icons/fa";

const Explanation = () => {
  return (
    <div className="container m-auto w-[90%] mt-5 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Caesar Cipher</h1>

      {/* Key Generation */}
      <div className="mb-8 lg:w-[40%] m-auto">
        <FaKey className="text-4xl mb-4 mx-auto text-blue-500" />
        <h3 className="text-xl font-semibold mb-2 text-center">
          Key Generation
        </h3>
        <p className="text-gray-700 text-center">
          Choose a positive integer as the shift value or key. This key
          represents the number of positions each letter in the plaintext will
          be shifted.
        </p>
      </div>
      {/* Parent Div */}
      <div className="flex-col lg:flex-row gap-5 flex justify-around items-center lg:w-[90%] m-auto">
        {/* Encryption (Shift Operation) */}
        <div className="mb-8 lg:w-[40%] m-auto bg-[#39b896] p-5 lg:h-[300px] rounded-lg">
          <FaArrowRight className="text-4xl mb-4 mx-auto text-white" />
          <h3 className="text-xl font-semibold mb-2 text-center text-white">
            Encryption (Shift Operation)
          </h3>
          <p className="text-white text-start">
            Start with the plaintext message. For each letter in the plaintext:
            determine its position in the alphabet, shift the letter by the key
            positions to the right, wrap around to the beginning if the shift
            goes beyond 'Z' (for uppercase letters) or 'z' (for lowercase
            letters), and replace the original letter with the shifted letter.
          </p>
          <p className="text-center mt-2 bg-white p-1 rounded-full text-sm">
            Example: Plain - HELLO, Key - 3, Encrypted - KHOOR
          </p>
        </div>

        {/* Decryption (Inverse Shift Operation) */}
        <div className="mb-8 lg:w-[40%] m-auto bg-red-400 p-4 lg:h-[300px] rounded-lg">
          <FaUndo className="text-4xl mb-4 mx-auto text-white" />
          <h3 className="text-xl font-semibold mb-2 text-center text-white">
            Decryption (Inverse Shift Operation)
          </h3>
          <p className="text-white text-start">
            Start with the encrypted message. For each letter in the ciphertext:
            determine its position in the alphabet, shift the letter by the key
            positions to the left, wrap around to the end if the shift goes
            beyond 'A' (for uppercase letters) or 'a' (for lowercase letters),
            and replace the encrypted letter with the shifted letter.
          </p>
          <p className="text-center mt-2 bg-white rounded-full p-1 text-sm ">
            Example: Encrypted - KHOOR, Key - 3, Decrypted - HELLO
          </p>
        </div>
      </div>
      {/* Example */}
      <div className="mb-8 m-auto text-center w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Example</h2>
        <p className="text-gray-700 text-center">
          Let's encrypt the message "OPEN" with a key of 2.
        </p>
        <div className="w-full flex-col lg:flex-row gap-5 flex m-auto p-5 justify-around items-center  mt-4 lg:w-[90%]">
          <div className="w-full text-white p-4 rounded-md lg:w-[40%] m-auto bg-[#39b896]">
            <h3 className="text-lg font-semibold mb-2">Encryption</h3>
            <p>Plain: OPEN</p>
            <p>Key: 2</p>
            <p>Encrypted: QRPG</p>
          </div>
          <div className="w-full bg-red-400 text-white p-4 rounded-md lg:w-[40%] m-auto">
            <h3 className="text-lg font-semibold mb-2">Decryption</h3>
            <p>Encrypted: QRPG</p>
            <p>Key: 2</p>
            <p>Decrypted: OPEN</p>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4 text-center">Note</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Caesar Cipher is a simple and easily breakable encryption method,
            especially when the key is known.
          </li>
          <li>
            The security increases with a larger key space, but it's not
            suitable for strong encryption needs.
          </li>
          <li>
            The algorithm is a form of symmetric key encryption, where the same
            key is used for both encryption and decryption.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explanation;
