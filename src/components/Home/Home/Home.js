import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Header from "../Header/Header";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <About />
      <Service />
    </div>
  );
};

export default Home;
