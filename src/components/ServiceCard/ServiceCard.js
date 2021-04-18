import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const ServiceCard = ({ service }) => {
  const { title, _id, image, description, price } = service;
  const { buyerData, setBuyerData } = useContext(userContext);

  const handleBuyerData = () => {
    setBuyerData({
      price: price,
      title: title,
    });
  };
  return (
    <>
      <div className="card mb-3">
        <img
          src={`data:image/jpeg;base64,${service.image.img}`}
          className="card-img-top mx-auto pt-3"
          style={{ width: "4rem" }}
          alt={_id}
        />
        <div className="card-body">
          <h2 className="card-title text-center"> {title} </h2>
          <p className="card-text text-center">{description}</p>
          <p className="card-text text-center">Price : ${price}</p>
          <Link to="/book" className="mx-auto">
            <button onClick={handleBuyerData} className="btn btn-primary ">
              Fix Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
