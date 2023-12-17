import React, { useState, useEffect } from "react";
import axios from "axios";
import EncryptionExplanation from "./EncryptionExplanation";

const EncryptionComponent = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("encrypt");
  const [selectedMethod, setSelectedMethod] = useState("default");
  const [typedResult, setTypedResult] = useState("");
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState("");

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = typedResult;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setCopied("Text Copied");
    setTimeout(() => {
      setCopied("");
    }, 3000);
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
    } catch (error) {
      console.error("AxiosError:", error);
      console.error("Error Response:", error.response);
    }
  };

  useEffect(() => {
    if (currentIndex < result.length) {
      const timer = setTimeout(() => {
        setTypedResult(
          (prevTypedResult) => prevTypedResult + result[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, result]);

  return (
    <div>
      <div
        className=" py-5 w-[95%] lg:w-[85%] m-auto bg-blue-500 p-5 rounded"
        id="Services"
      >
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-white font-bold text-2xl lg:text-4xl text-center">
            ENCRYPT & DECRYPT
          </h1>
          <p className="mt-5 text-sm lg:text-lg text-center text-white capitalize">
            Encrypt and Decrypt any Text or Message using the below provided
            input places, By just Choosing the method of Your Encryptio and
            Decryption Simply you can Encrypt or Decrypt Your Message or Texts.
          </p>
          <div className="w-full font-poppins m-auto flex justify-center items-start flex-col container mx-auto mt-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              {/* Left Side: Input and Controls */}
              <div className="bg-gray-100 p-5 ">
                <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
                  ETE CipherCraft
                </h1>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Text
                  </label>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                {selectedMethod === "default" && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Shift
                    </label>
                    <input
                      type="number"
                      value={shift}
                      onChange={(e) => setShift(parseInt(e.target.value, 10))}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Operation
                  </label>
                  <select
                    value={operation}
                    onChange={handleOperationChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="encrypt">Encrypt</option>
                    <option value="decrypt">Decrypt</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Encryption Method
                  </label>
                  <select
                    value={selectedMethod}
                    onChange={handleMethodChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="default">Caesar Cipher</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>

                <button
                  onClick={handleEncryptDecrypt}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md flex justify-center items-center w-full hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
                >
                  {operation === "encrypt" ? "Encrypt" : "Decrypt"}
                </button>
              </div>

              {/* Right Side: Result */}

              <div className="bg-gray-100 flex flex-col justify-center items-center overflow-hidden p-5 relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {operation === "encrypt"
                    ? "Encrypted Text"
                    : "Decrypted Text"}
                  <p className="text-green-600 text-center">{copied}</p>
                </label>
                <div className="h-[350px] flex items-center justify-center m-auto w-full">
                  <textarea
                    value={typedResult}
                    readOnly
                    onClick={copyToClipboard}
                    placeholder="Click on the Text To Copy"
                    className="text-center mt-1 p-2 border cursor-pointer h-full border-gray-300 rounded-md w-full resize-none text-black overflow-scroll focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EncryptionExplanation />
    </div>
  );
};

export default EncryptionComponent;
