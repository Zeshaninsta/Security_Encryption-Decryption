import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Services from "./Encryption";
import Hero from "./Hero";
import SecondPage from "./secondPage";
import Learn from "./Learn";
import { Element } from "react-scroll";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Home/Services") {
      const predictSection = document.getElementById("Services");
      if (predictSection) {
        predictSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname]);
  useEffect(() => {
    if (location.pathname === "/Home/SecondPage") {
      const sec = document.getElementById("explore");
      if (sec) {
        sec.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname]);

  return (
    <div>
      <Hero />
      <SecondPage />
      <Learn />
      <Element id="services">
        <Services />
      </Element>
    </div>
  );
};

export default Index;
