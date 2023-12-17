import React from "react";
import IMG from "./Image/encry.png";

const secondPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 p-4 mt-5 ">
      {/* Leftside */}
      <div className="flex flex-col text-center lg:w-[40%] m-auto">
        <h1 className="font-bold text-4xl">
          Secure Your Messages with Advanced Encryption Technology
        </h1>
        <p className="text-md mt-5">
          Our encryption service ensures that your messages are protected from
          unauthorized access. With our advanced encryption technology, you can
          have peace of mind knowing that your sensitive information is secure.
        </p>
        {/* minicard */}
        <div className=" flex-col flex  md:flex-row justify-evenly items-center gap-5 mt-5">
          <div className="text-center rounded-lg text-gray-700 p-3 border border-gray-300 lg:w-3/4 ">
            <h1 className="text-md font-bold">Easy Encryption</h1>
            <p className="text-sm italic">
              Encrypt and decrypt any message or text with just a click of a
              button.
            </p>
            <button className="bg-blue-600 text-white p-2 mt-4 rounded hover:bg-blue-900 ">
              Get Started
            </button>
          </div>
          <div className="text-gray-700 text-center text-sm p-4 border border-gray-300 rounded-lg  lg:w-full">
            <h1 className="text-lg font-bold ">Secure Communication</h1>
            <p className="text-sm italic flex flex-col w-full">
              Protect your privacy and ensure secure communication with our
              encryption service.
            </p>
            <p className="text-red-500 p-2 mt-2 capitalize cursor-pointer">
              coming soon
            </p>
          </div>
        </div>
      </div>
      {/* rightside */}
      <div className="p-5 lg:w-[50%]">
        <img src={IMG} alt="img" className="rounded-lg" />
      </div>
    </div>
  );
};

export default secondPage;
