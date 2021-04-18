import React, { useContext } from "react";
import { userContext } from "../../../App";
import BuyingInfo from "../../BuyingInfo/BuyingInfo";
import ProcessPayment from "../../ProcessPayment/ProcessPayment";
import Sidebar from "../../Sidebar/Sidebar";

const Book = () => {
  const { login } = useContext(userContext);
  console.log(login.email, login.name);

  return (
    <div>
      <div className="row">
        <div className="col-md-4 mt-3 mb-3">
          <Sidebar />
        </div>
        <div className="col-md-8 mt-1">
          <h3 className="text-center">Bookings</h3>
          <BuyingInfo />
          <ProcessPayment />
        </div>
      </div>
    </div>
  );
};

export default Book;
