import React from "react";
import Hero from "../../components/Hero/Hero";
import AboutPage from "../../components/About/About";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Contacts from "../../components/Contact/Contact";
import Stages from "../../components/Stages/Stages";

const Main = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <Stages/> */}
      <Slider /> 
      <Contacts />
      {/* <AboutPage/> */}
    </>
  );
};

export default Main;
