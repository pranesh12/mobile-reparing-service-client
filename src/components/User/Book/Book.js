import React, { useContext } from "react";
import { userContext } from "../../../App";
import BuyingInfo from "../../BuyingInfo/BuyingInfo";
import ProcessPayment from "../../ProcessPayment/ProcessPayment";
import Sidebar from "../../Sidebar/Sidebar";

const Book = () => {
  const { login } = useContext(userContext);

  return (
    <div>
      <div className="row">
        <Sidebar />

        <div className="col-md-8" style={{ background: "#c1d3fe" }}>
          <h3 className="text-center">Bookings</h3>
          <BuyingInfo />
          <ProcessPayment />
        </div>
      </div>
    </div>
  );
};

export default Book;
