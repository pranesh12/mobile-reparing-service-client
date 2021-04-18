import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div style={{ background: "#70e000" }}>
        <div className="container header_nav ">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <p className="navbar-brand text-white ">Mobile Reparing Shop</p>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link pr-3 " to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item text-white  pr-3 f">
                  <Link to="/dashboard" className="nav-link text-dark">
                    Dash Board
                  </Link>
                </li>
                <li className="nav-item text-white  pr-3">
                  <Link to="/login" className="nav-link text-dark">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
