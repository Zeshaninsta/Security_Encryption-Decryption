import React from "react";
import one from "./Image/1.png";
import two from "./Image/2.png";
import three from "./Image/3.png";

const Learn = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col justify-between items-center mb-10">
      <h1 className="text-2xl text-center lg:text-4xl font-bold mt-10">
        Learn How To Encrypt and Decrypt Texts
      </h1>
      <div className="flex-col lg:flex-row flex justify-around mt-10 items-center gap-5 lg:w-[95%]">
        <div className="flex justify-center items-center flex-col text-center gap-2 lg:w-[30%] m-auto border-2 border-gray-100 p-2">
          <img src={one} alt="securly" />
          <h1 className="text-xl font-bold">
            Securely Protect Your Communications
          </h1>
          <p className="text-sm">
            Our Website Provides a Simple and efficient way to encrypt or
            decrypt any text
          </p>
          <button className="w-[100px] bg-blue-700 hover:bg-blue-900 p-2 text-white rounded-md mt-2">
            Get Started
          </button>
        </div>
        <div className="flex justify-center items-center flex-col text-center gap-2 lg:w-[30%] m-auto border-2 border-gray-100 p-2">
          <img src={two} alt="keep" />
          <h1 className="text-xl font-bold">
            Keep Your Information Confidential
          </h1>
          <p className="text-sm">
            With just a few clicks, you can ensure that your message or text is
            only accessible to the intended recipients
          </p>
          <button className="w-[100px] bg-blue-700 hover:bg-blue-900 p-2 text-white rounded-md mt-2">
            Start Now
          </button>
        </div>
        <div className="flex justify-center items-center flex-col text-center gap-2 lg:w-[30%] m-auto border-2 border-gray-100 p-2">
          <img src={three} alt="Protect" />

          <h1 className="text-xl font-bold">Protect Your Privacy with Ease</h1>
          <p className="text-sm">
            Our user-friendly interface makes it simple to safeguard your
            sensitive information
          </p>
          <button className="w-[100px] bg-blue-700 hover:bg-blue-900 p-2 text-white rounded-md mt-4">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
