import React, { useContext } from "react";
import { userContext } from "../../App";

const BuyingInfo = () => {
  const { buyerData } = useContext(userContext);
  console.log(buyerData);

  return (
    <div className="mb-5 mt-5">
      <h2>Buying</h2>
    </div>
  );
};

export default BuyingInfo;
