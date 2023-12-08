// File: EncryptionComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import TypeWriterEffect from "./type_writer";

const EncryptionComponent = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("encrypt");
  const [selectedMethod, setSelectedMethod] = useState("default");
  const [typedResult, setTypedResult] = useState("");
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const handleEncryptDecrypt = async () => {
    try {
      let endpoint = "";

      if (selectedMethod === "default") {
        endpoint = `http://127.0.0.1:5000/${operation}`;
      } else if (selectedMethod === "custom") {
        endpoint = `http://127.0.0.1:5000/${operation}_custom`;
      }

      const response = await axios.post(endpoint, {
        text,
        shift,
        operation,
      });

      console.log(response.data);

      const resultField =
        selectedMethod === "default"
          ? operation === "encrypt"
            ? "encrypted_text"
            : "decrypted_text"
          : operation === "encrypt"
          ? "encrypted_text_custom"
          : "decrypted_text_custom";

      const resultText = response.data[resultField];
      setResult(resultText);
      setCurrentIndex(0);
      setTypedResult("");

      // Simulate typewriter effect for the textarea
    } catch (error) {
      console.error("AxiosError:", error);
      console.error("Error Response:", error.response);
    }
  };

  useEffect(() => {
    // Simulate typewriter effect for the textarea
    if (currentIndex < result.length) {
      const timer = setTimeout(() => {
        setTypedResult(
          (prevTypedResult) => prevTypedResult + result[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, result]);
  return (
    <div className="w-[90%] m-auto flex justify-center items-start flex-col container mx-auto mt-8 lg:w-1/2">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Text Encryption and Decryption
        </h1>
        <div className="mb-4 w-full">
          <label className="block text-sm font-medium text-gray-700">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4 w-full">
          {selectedMethod === "default" && (
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-gray-700">
                Shift
              </label>
              <input
                type="number"
                value={shift}
                onChange={(e) => setShift(parseInt(e.target.value, 10))}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          )}
        </div>

        <div className="mb-4 w-full">
          <label className="block text-sm font-medium text-gray-700">
            Operation
          </label>
          <select
            value={operation}
            onChange={handleOperationChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="encrypt">Encrypt</option>
            <option value="decrypt">Decrypt</option>
          </select>
        </div>

        <div className="mb-4 w-full">
          <label className="block text-sm font-medium text-gray-700">
            Encryption Method
          </label>
          <select
            value={selectedMethod}
            onChange={handleMethodChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="default">Default</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        <button
          onClick={handleEncryptDecrypt}
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex justify-center items-center w-full hover:bg-blue-800"
        >
          {operation === "encrypt" ? "Encrypt" : "Decrypt"}
        </button>
        {result && (
          <div className="mt-4 border-2 border-gray-300 p-2 w-full">
            <label className="block text-sm font-medium text-gray-700">
              {operation === "encrypt" ? "Encrypted Text" : "Decrypted Text"}
            </label>
            <div className="relative">
              <textarea
                value={typedResult}
                readOnly
                className="mt-1 p-2 border border-gray-300 rounded-md w-full resize-none text-black"
              />
              {/* <div className="absolute top-0 left-0 w-full h-full p-2">
                <TypeWriterEffect text={typedResult} />
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EncryptionComponent;
