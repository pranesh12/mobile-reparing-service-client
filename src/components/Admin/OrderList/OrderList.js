import React from "react";
import Sidebar from "../../Sidebar/Sidebar";

const OrderList = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Sidebar />
        </div>
        <div className="col">
          <h3>Order List</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
