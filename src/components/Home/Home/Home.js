import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Blog from "../Blog/Blog";

import Header from "../Header/Header";
import Review from "../Review/Review";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
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
