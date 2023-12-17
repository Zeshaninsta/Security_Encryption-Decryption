import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarker,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const handlePhoneClick = () => {
    window.location.href = "tel:+251928137925";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:zeshaninsta@gmail.com";
  };

  const handleLocationClick = () => {
    window.open("https://maps.google.com?q=Robe+Bale+Ethiopia+zeeshan+Photo");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_7gmalpj";
    const templateID = "template_oqcmv2q";
    const userID = "U9Af-ThoZYV_wQLsR";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        // alert("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setShowModal(true, response);
      })
      .catch((error) => {
        alert("Error sending email:", error);
      });
  };

  return (
    <div className=" p-5 flex flex-col justify-center items-center m-auto bg-gray-100">
      <div className="flex-col lg:flex-row flex justify-around items-center gap-5 w-full mt-5 ">
        {/* LeftSide */}
        <div className="flex flex-col items-center w-full lg:w-[40%] p-2 gap-2">
          <h1 className="text-4xl font-bold cursor-pointer">
            {" "}
            <span className="text-yellow-300">ETE</span> CipherCraft
          </h1>
          <h3>Feel Free To Contact us</h3>
          <div className=" mt-2 w-full text-center text-slate-900">
            <h1 className="text-2xl font-bold capitalize text-center">
              Get a quote
            </h1>
            <p className="capitalize mb-2 ">
              Fill up the form and our team will get back to you in 24 hours.
            </p>
          </div>
          <div className="flex justify-center items-start flex-col gap-2 w-full">
            <h3
              className="flex gap-2 items-center border-2 border-gray-200 p-2 w-full cursor-pointer"
              onClick={handleEmailClick}
            >
              {" "}
              <FaEnvelope /> Eteciphercraft@gmail.com
            </h3>
            <h3
              className="flex gap-2 items-center border-2 border-gray-200 p-2 w-full cursor-pointer"
              onClick={handlePhoneClick}
            >
              <FaPhone />
              +251928137925
            </h3>
            <h3
              className="flex gap-2 items-center border-2 border-gray-200 p-2 w-full cursor-pointer"
              onClick={handleLocationClick}
            >
              <FaMapMarker /> Robe Bale Ethiopia
            </h3>
          </div>
        </div>
        {/* RightSide */}
        <div className="flex flex-col justify-center items-start w-full lg:w-[40%] p-4 text-start bg-gray-200 rounded ">
          <h3 className="text-2xl font-bold text-center m-auto">
            <span className="text-yellow-400">Share</span> Your Idea
          </h3>
          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <label className="text-start text-gray-800">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-2 outline-none border-2 border-gray-100"
            />
            <label className="text-gray-800">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 outline-none border-2 border-gray-100"
            />
            <label className="text-gray-800">Message</label>
            <textarea
              className="w-full h-[200px] resize-none outline-none p-2 border-2 border-gray-100"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className="p-2 bg-blue-600 hover:bg-blue-900 text-white mt-4 w-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      {/* Modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg w-[60%] text-center m-auto shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center m-auto p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-center text-[#396E8D] font-bold">
                    <span className="text-yellow-300">ETE</span> CipherCraft
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Email Sent successfully
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Contact;
