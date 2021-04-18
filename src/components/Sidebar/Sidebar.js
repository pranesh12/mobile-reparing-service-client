import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const { login } = useContext(userContext);
  const email = login.email;
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/isAdmin?email=${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      })
      .catch((err) => console.log(err));
  }, [email]);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-4 py-5 px-4"
      style={{ height: "100vh" }}>
      <ul className="list-unstyled">
        {isAdmin ? (
          <div>
            <li>
              <Link to="/admin/OrderList" className="text-white">
                <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/AddService" className="text-white">
                <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/Makeadmin" className="text-white">
                <span>Make Admin</span>
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to="/book" className="text-white">
                <span>Book</span>
              </Link>
            </li>
            <li>
              <Link to="/bookinglist" className="text-white">
                <span>BookingList</span>
              </Link>
            </li>
            <li>
              <Link to="/addreview" className="text-white">
                <span>Review</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
