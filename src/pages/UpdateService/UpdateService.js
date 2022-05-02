import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateService = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const {img, name, description, quantity, price, supplier} = services;

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((res) => setServices(res));
  }, []);

  return (
    <div className="container-fluid mt-5 ms-5">
      <div className="service w-25 mx-auto">
      <img src={img} className="w-100 rounded-3" alt="img" />
      <h2 className="pt-4">{name}</h2>
      <div className="p-2">
      <p>{description}</p>
      <p> <b>Quantity : {quantity}</b> </p>
      <p>Price: ${price}</p>
      <p>
        <small>{supplier}</small>
      </p>
      </div>
      <button className="btn btn-info me-4">Update Service</button>
      <button className="btn btn-info">Delevered</button>
    </div>
    </div>
  );
};

export default UpdateService;
