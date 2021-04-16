import React, { useEffect, useState } from "react";
import tool from "../../../resources/icons/tool.png";

const dummyServiceData = [
  {
    title: "Phone Diagnosis",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    date: "23 April 2019",
    cost: 300,
  },
  {
    title: "LCD Replacement ",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    date: "23 April 2019",
    cost: 100,
  },
  {
    title: "Battery Replacement",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    date: "23 April 2019",
    cost: 200,
  },
];

const Service = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    setServiceData(dummyServiceData);
  }, []);

  console.log(serviceData);
  return (
    <section className="mt-5 " style={{ background: "#FAFAFA" }}>
      <div className="container">
        <h1 className="text-center pt-4">Services We provided</h1>
        <div className="row mt-5">
          {serviceData.map((service) => (
            <div className="col-md-4">
              <img
                className="img-fluid mx-auto d-block"
                src={tool}
                alt={service.tool}
                style={{ width: "4rem" }}
              />
              <h3 className="text-center">{service.title}</h3>
              <p className="text-center">{service.description}</p>
              <p>Price : ${service.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
