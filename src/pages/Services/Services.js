import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://quiet-taiga-62097.herokuapp.com/service")
      .then((res) => res.json())
      .then((res) => setServices(res));
  }, []);
  return (
    <div className="container-fluid">
      <h1 className="text-info py-4 mx-auto">Inventory Items</h1>
      <div className="services-container">
        {services.slice(0, 6).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
