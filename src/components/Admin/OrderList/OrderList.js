import React from "react";
import Sidebar from "../../Sidebar/Sidebar";

const OrderList = () => {
  return (
    <div>
      <div className="row ">
        <div className="col-5">
          <Sidebar />
        </div>
        <div className="col-7">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email id</th>
                <th scope="col">service</th>
                <th scope="col">pay With</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>Status</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
