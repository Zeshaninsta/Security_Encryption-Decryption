import React from "react";
import { FaLock, FaKey, FaUndo, FaArrowRight, FaUnlock } from "react-icons/fa";

const CustomEncryption = () => {
  // Function to generate an array of alphabet letters
  const generateAlphabet = (reverse = false) => {
    const start = reverse ? 90 : 65;
    const end = reverse ? 65 : 90;
    const step = reverse ? -1 : 1;
    const alphabet = [];
    for (let i = start; reverse ? i >= end : i <= end; i += step) {
      alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
  };

  // Generate arrays for both first and second keys
  const firstKeyAlphabet = generateAlphabet();
  const secondKeyAlphabet = generateAlphabet(true);

  return (
    <div className="w-[95%] mx-auto text-gray-600 p-4 md:p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Unveiling the Custom Algorithm
      </h2>

      <div className="flex-col md:flex-row flex justify-evenly items-center gap-5">
        {/* First Key Table */}
        <div className="mb-8 w-full md:w-1/2 mx-auto border border-green-900 p-2">
          <h3 className="text-2xl font-semibold mb-4 text-center bg-green-900 text-white p-2 flex justify-center items-center gap-2">
            First Key:
            <FaKey className="text-2xl text-white" />
          </h3>
          <div className="grid grid-cols-5 gap-2 mx-auto text-white">
            {firstKeyAlphabet.map((letter, index) => (
              <div
                key={index}
                className="p-2 border border-white text-center bg-green-900"
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Second Key Table */}

        <div className="mb-8 w-full md:w-1/2 mx-auto border border-blue-900 p-2">
          <h3 className="text-2xl font-semibold mb-4 text-center gap-2 bg-blue-900 text-white p-2 flex justify-center items-center">
            Second Key:
            <FaKey className="text-2xl text-white" />
          </h3>
          <div className="grid grid-cols-5 gap-2 mx-auto text-white">
            {secondKeyAlphabet.map((letter, index) => (
              <div
                key={index}
                className="p-2 border border-white text-center bg-blue-900"
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Encr */}

      {/* Encryption */}
      <div className="mb-6 flex items-center flex-col ">
        <div className="text-3xl ">
          <div className="flex-col md:flex-row flex justify-between items-center gap-5 ">
            <div className="w-full rounded-lg bg-green-900 p-5 flex flex-col items-center justify-center text-white text-md">
              <h1 className="flex justify-center items-center gap-2 text-sm md:text-md">
                {" "}
                <FaLock /> This is How Encryption Works
              </h1>
              <p className="italic text-sm mt-2">
                Fromula = First Key / Second Key
              </p>
            </div>
            <div className="w-full rounded-lg bg-blue-900 p-5 flex flex-col items-center justify-center text-white text-md">
              <h1 className="flex justify-center items-center gap-2 text-sm md:text-md">
                {" "}
                <FaUnlock />
                This is How Decryption Works
              </h1>
              <p className="italic text-sm mt-2">
                Formula = Second Key / First Key{" "}
              </p>
            </div>
          </div>
          {/* Exp */}
          <div className="flex flex-col justify-center items-center gap-5 mt-5">
            <p className="text-xl">
              <span className="font-bold">Encryption:</span> A/Z, B/Y, C/X, D/W,
              and so forth.
            </p>

            {/* Decryption */}
            <div className="mb-6 flex items-center justify-center">
              <p className="text-xl">
                <span className="font-bold">Decryption:</span> Z/A, Y/B, X/C,
                W/D, and so forth.
              </p>
            </div>
          </div>
          <p className="text-lg mb-8">
            To encrypt a word, align each letter with the corresponding letter
            in the custom encryption key. The top line represents the standard
            alphabet, and the bottom line represents the custom key.
          </p>

          <p className="text-lg mb-8">
            For decryption, the process is reversed, with the top line
            representing the custom key and the bottom line representing the
            regular alphabet.
          </p>

          <p className="text-lg">
            Let's illustrate with an example. We'll encrypt the word "SECRET"
            using the Custom Algorithm.
          </p>
        </div>
        {/* Example */}
        <div className="mt-8 p-6 bg-white rounded-lg text-gray-800">
          <p className="mb-4">
            <span className="font-bold">Original Text:</span> SECRET
          </p>
          <p className="mb-4">
            <span className="font-bold">Encryption Key:</span> A/Z, B/Y, C/X,
            D/W, ...
          </p>
          <p className="mb-4">
            <span className="font-bold">Encrypted Text:</span> HVXIVG
          </p>
        </div>
        {/* <div className="w-full md:w-1/2 mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">Second Key:</h3>
        <div className="grid grid-cols-5 gap-2 mx-auto">
          {secondKeyAlphabet.map((letter, index) => (
            <div
              key={index}
              className="p-2 border border-white text-center bg-gray-300"
            >
              {letter}
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default CustomEncryption;
