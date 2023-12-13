import React, { useState } from "react";

const SubscribeCard = () => {
  const [isCardVisible, setCardVisible] = useState(false);

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
  };

  return (
    <div className="relative">
      {/* Subscribe Button */}
      <button
        onClick={isCardVisible ? closeCard : toggleCard}
        className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md"
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
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md w-full mr-2"
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
    </div>
  );
};

export default SubscribeCard;
