import React from "react";
import Sidebar from "../../Sidebar/Sidebar";

const BookingList = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col">
          <h3>Booking List</h3>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
