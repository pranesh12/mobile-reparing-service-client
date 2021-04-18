import React, { useContext, useEffect } from "react";
import { userContext } from "../../../App";
import ServiceCard from "../../ServiceCard/ServiceCard";

const Service = () => {
  const { serviceData, setServiceData } = useContext(userContext);

  useEffect(() => {
    fetch("https://agile-hamlet-17796.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      });
  }, []);

  return (
    <section className="mt-5 pt-5 pb-5" style={{ background: "#FAFAFA" }}>
      <div className="container">
        <h1 className="text-center mt-4">Services We provided</h1>
        <div className="row mt-5">
          {serviceData.map((service) => (
            <div className="col-md-4">
              <ServiceCard service={service}></ServiceCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
