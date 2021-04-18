import React, { useContext } from "react";
import { userContext } from "../../App";

const BuyingInfo = () => {
  const { buyerData } = useContext(userContext);
  const { login } = useContext(userContext);

  return (
    <div className="mb-5 mt-5">
      <form>
        <div className="form-group">
          <input
            className="form-control mt-3"
            type="text"
            disabled
            value={login.name}
            name="Buyer name"
          />
          <input
            className="form-control mt-3"
            type="text"
            disabled
            value={login.email}
            name="email"
          />
          <input
            className="form-control mt-3"
            type="text"
            disabled
            value={buyerData.title}
            name="service title"
          />
          <p className="text-center pt-5">
            You have to pay <span style={{ color: "red" }}>{buyerData.price} </span>for this service
          </p>
        </div>
      </form>
    </div>
  );
};

export default BuyingInfo;
