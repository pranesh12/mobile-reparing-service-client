import React from "react";
import tool from "../../../resources/icons/tool.png";
import signal from "../../../resources/icons/signal.png";
import warranty from "../../../resources/icons/warranty.png";

const About = () => {
  return (
    <main className="container mb-4" style={{ height: "70vh" }}>
      <div className="row mt-5 pt-5 ">
        <h1 className="text-center mx-auto">We are mobile phone repaier</h1>
        <p className="text-center  mt-2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum autem aperiam ex
          ad! Quasi minima aspernatur doloremque at quos?
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 ">
          <img
            className="img-fluid mx-auto d-block"
            src={tool}
            alt={tool}
            style={{ width: "4rem" }}
          />
          <h3 className="text-center">Great Experience</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at quas ipsa, id sed
            perferendis?
          </p>
        </div>
        <div className="col-md-4 ">
          <img
            className="img-fluid mx-auto d-block"
            src={warranty}
            alt={warranty}
            style={{ width: "4rem" }}
          />
          <h3 className="text-center">Mobile warranty</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at quas ipsa, id sed
            perferendis?
          </p>
        </div>
        <div className="col-md-4 ">
          <img
            className="img-fluid mx-auto d-block"
            src={signal}
            alt={signal}
            style={{ width: "4rem" }}
          />
          <h3 className="text-center">Customer Support</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at quas ipsa, id sed
            perferendis?
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
