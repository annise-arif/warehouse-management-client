import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "../Services/Service/Service";

const UpdateService = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((res) => setServices(res));
  }, []);

  return (
    <div className="container-fluid">
      <h1>Update Service: {services.name}</h1>
      <div className="services-container mx-auto">
        <Service key={services.id} service={services}></Service>
      </div>
    </div>
  );
};

export default UpdateService;
