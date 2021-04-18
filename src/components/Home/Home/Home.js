import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Review from "../Review/Review";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <About />
      <Service />
      <Blog />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
