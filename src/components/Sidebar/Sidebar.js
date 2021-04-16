import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}>
        <ul className="list-unstyled">
          <div>
            <li>
              <Link to="/allPatients" className="text-white">
                <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link to="/patient" className="text-white">
                <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link to="/prescriptions" className="text-white">
                <span>Prescriptions</span>
              </Link>
            </li>
            <li>
              <Link to="/addDoctor" className="text-white">
                <span>Add Doctor</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/setting" className="text-white">
                <span>Settings</span>
              </Link>
            </li>
          </div>
          {/* )} */}
        </ul>
        <div>
          <Link to="/" className="text-white">
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
