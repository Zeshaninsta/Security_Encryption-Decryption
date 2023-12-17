import React from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
} from "react-icons/fa";
import Emran from "./Image/Developers/Emran.jpg";
import Eebisa from "./Image/Developers/Eebisa.jpg";
import Tuji from "./Image/Developers/Tuji.jpg";
const About = () => {
  return (
    <div className="container mx-auto text-gray-700 p-4 lg:p-8 lg:w-[80%]">
      <h2 className="text-4xl font-bold mb-8 text-center mt-10">Who We Are</h2>
      {/* Meaning of ETE and CipherCraft */}
      {/* ETE Meaning */}
      <div className="flex-col lg:flex-row flex justify-between items-center p-5 bg-red-200 gap-5 ">
        <div className=" text-center text-gray-700 h-[200px] border-2 border-gray-100 flex flex-col items-center justify-center p-2">
          <h3 className="text-2xl font-bold mb-4 text-center">ETE</h3>
          <p className="capitalize">
            ETE stands for "Emran, Tuji, Eebisa," which is representing the
            first letter of our Name and we are dedicated students behind
            CipherCraft. It symbolizes collaboration and teamwork in the field
            of IT.
          </p>
        </div>

        {/* CipherCraft Meaning */}
        <div className=" text-center text-gray-700 h-[200px] border-2 border-gray-100 p-2  flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-4 text-center">CipherCraft</h3>
          <p>
            CipherCraft combines "Cipher," referring to encryption techniques,
            with "Craft," emphasizing the skill and artistry involved in
            crafting secure and effective encryption systems.
          </p>
        </div>
      </div>

      {/* Teacher Section */}
      <div className="mb-8 flex items-center mt-10">
        <FaChalkboardTeacher className="text-4xl mr-4" />
        <p>
          ETE CipherCraft was assigned by our Information Assurance and Security
          teacher, Mr. Tagegn. His guidance and teachings have been invaluable
          in shaping our understanding of encryption concepts.
        </p>
      </div>
      {/* Project Details Section */}
      <div className="flex items-center">
        <FaLaptopCode className="text-4xl mr-4" />
        <p>
          Developed by MWU Information Technology students, ETE CipherCraft uses
          React for the frontend, Flask for the backend, and Axios for API
          integration. The project demonstrates our commitment to practical
          learning and secure system development.
        </p>
      </div>

      <div className="mt-10 bg-gray-100 p-5 text-center">
        <p className="mb-4 text-start">
          we focused on implementing the Caesar Cipher, a classic encryption
          technique that we taught by Mr. Tagegn, and further enhanced the
          system by introducing our own encryption and decryption methods.
        </p>

        <p className="mb-4 text-start">
          As students of Madda Walabu University, we aims to contribute to the
          field of information technology and security while gaining valuable
          experience in the development and implementation of secure systems.
        </p>
      </div>

      {/* Team Section */}
      <div className="flex flex-col justify-center items-center mt-10 ">
        <h1 className="text-4xl font-bold mb-2 mt-2">Teams</h1>
        <div className="flex flex-col md:flex-row items-center justify-around mb-8 mt-2 bg-gray-50 lg:bg-transparent w-full">
          {/* Emran */}
          <div className="mb-4 md:mb-0 flex items-center flex-col justify-center border-2 border-gray-100 p-5 w-[300px] cursor-pointer hover:scale-105">
            <img src={Emran} alt="Emran" className="w-full" />
            <h1 className="flex gap-2 mt-2">
              <FaGraduationCap className="text-2xl mr-2" />
              <strong>Emran MohammedYakob</strong>
            </h1>
            <p className="mt-2">Backend Developer</p>
          </div>

          {/* Tuji */}
          <div className="mb-4 md:mb-0 flex items-center flex-col justify-center border-2 border-gray-100 p-5 w-[300px] cursor-pointer hover:scale-105">
            <img src={Tuji} alt="Tuji" className="w-full" />
            <h1 className="flex gap-2 mt-2">
              <FaGraduationCap className="text-2xl mr-2" />
              <strong>Tuji Sultan</strong>
            </h1>
            <p className="mt-2">Front-end Developer</p>
          </div>

          {/* Eebisa */}
          <div className="mb-4 md:mb-0 flex items-center flex-col justify-center border-2 border-gray-100 p-5 w-[300px] cursor-pointer hover:scale-105">
            <img src={Eebisa} alt="Eebisa" className="w-full" />
            <h1 className="flex gap-2 mt-2">
              <FaGraduationCap className="text-2xl mr-2" />
              <strong>Eebbisa Haile</strong>
            </h1>
            <p className="mt-2">Front-end Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
