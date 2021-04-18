import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import Sidebar from "../../Sidebar/Sidebar";

const OrderList = () => {
  const { login } = useContext(userContext);
  let email = login.email;
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/AdminOrderList?email=${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrderList(data);
      })
      .catch((err) => console.log(err));
  }, [email]);

  return (
    <div>
      <div className="row ">
        <Sidebar />

        <div className="col-md-8" style={{ background: "#c1d3fe" }}>
          <table className="table">
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
              {orderList.map((info) => (
                <tr>
                  <td>{info.name}</td>
                  <td>{info.email}</td>
                  <td>{info.title}</td>
                  <td>{info.card}</td>
                  <td>
                    <p className="text-danger">pending</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
