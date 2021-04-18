import React from "react";
import "./Footer.css";
import { FaBeer } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5 pt-5 footer-dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li>
                <p>Mobile Repair</p>
              </li>
              <li>
                <p>Bettary Diagnosis</p>
              </li>
              <li>
                <p>Screen Repair</p>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 item">
            <h3>About</h3>
            <ul>
              <li>
                <p>Copmany </p>
              </li>
              <li>
                <p>Carrier</p>
              </li>
              <li>
                <p>Team</p>
              </li>
            </ul>
          </div>
          <div className="col-md-6 item text">
            <h3>Company Name</h3>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
              vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit
              pulvinar dictum vel in justo.
            </p>
          </div>
          <div className="col item social">
            <Link to="#">
              <FaBeer className="icon "></FaBeer>
            </Link>
            <Link to="#">
              <FaFacebookF />
            </Link>
            <Link to="#">
              <FaBeer className="icon "></FaBeer>
            </Link>
            <Link to="#">
              <FaFacebookF />
            </Link>
          </div>
        </div>
        <p className="copyright">Company Name © 2018</p>
      </div>
    </div>
  );
};

export default Footer;
