import React from "react";
import EncryptionComponent from "./Encryption";
import Hero from "./Hero";
import Nav from "./Nav";
import SecondPage from "./secondPage";
import Footer from "./Footer";

const index = () => {
  return (
    <div>
      <Hero />
      <SecondPage />
      <EncryptionComponent />
    </div>
  );
};
export default index;
