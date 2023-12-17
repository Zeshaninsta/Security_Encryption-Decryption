import React, { useState } from "react";
import emailjs from "emailjs-com";

const SubscribeCard = () => {
  const [isCardVisible, setCardVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = React.useState(false);

  const toggleCard = () => {
    setCardVisible(!isCardVisible);
  };

  const closeCard = () => {
    setCardVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For demonstration purposes, simply closing the card
    closeCard();
    const serviceID = "service_7gmalpj";
    const templateID = "template_oqcmv2q";
    const userID = "U9Af-ThoZYV_wQLsR";

    const templateParams = {
      from_email: email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        // alert("Email sent successfully!", response);
        setEmail("");
        setShowModal(true, response);
      })
      .catch((error) => {
        alert("Error sending email:", error);
      });
  };

  return (
    <div className="relative">
      {/* Subscribe Button */}
      <button
        onClick={isCardVisible ? closeCard : toggleCard}
        className="bg-yellow-400 text-white font-bold px-4 py-2 rounded-md"
      >
        Subscribe
      </button>

      {/* Subscribe Card (Slides from Right to Left) */}
      <div
        className={`fixed right-0 top-0 transform ${
          isCardVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform w-72 bg-white text-blue-900 p-4`}
      >
        <h3 className="text-lg font-semibold mb-4">Subscribe for Newsletter</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-yellow-400 px-4 py-2 font-bold rounded-md w-full mr-2 text-white"
            >
              Subscribe
            </button>
            <button
              type="button"
              onClick={closeCard}
              className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
            >
              Close
            </button>
          </div>
        </form>
      </div>
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
                    Subscribed Successfully
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

export default SubscribeCard;
