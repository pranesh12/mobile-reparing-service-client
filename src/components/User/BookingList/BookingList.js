import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import Sidebar from "../../Sidebar/Sidebar";

const BookingList = () => {
  const { login } = useContext(userContext);
  const [BookingList, setBookingList] = useState([]);
  const email = login.email;

  useEffect(() => {
    fetch(`http://localhost:5000/bookingList?email=${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBookingList(data);
        console.log(data, data[0]);
      })
      .catch((err) => console.log(err));
  }, [email]);

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <Sidebar />
        </div>
        <div className="col-8 mt-5">
          <h3 className="text-center">Booking List</h3>
          <div className="row mt-5">
            {BookingList.map((booklist) => (
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <p className="card-title text-center">Service: {booklist.title}</p>
                    <p className="card-text text-center">Price: {booklist.price}</p>
                    <p className="card-text text-center">
                      Status: <span style={{ color: "red" }}>pending</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
