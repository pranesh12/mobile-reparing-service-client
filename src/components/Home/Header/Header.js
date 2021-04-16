import React from "react";
import mobileRepair from "../../../resources/images/background.jpg";
import "./Header.css";

const Header = () => {
  const headerStyle = {
    width: "100%",
    height: "90vh",
    backgroundImage: `url(${mobileRepair})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  };
  const layerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
  return (
    <header style={headerStyle}>
      <div style={layerStyle}></div>
      <div className="headerSection">
        <div className="info">
          <h1 className="text-white bold">Any Mobile Problems</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam eligendi omnis cum
            reiciendis aut fuga facilis? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Vitae eaque corporis, sunt officia veniam distinctio similique voluptate ullam natus et.
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
