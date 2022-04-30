import React from "react";
import './Service.css';

const Service = ({ service }) => {
  const { img, name, description, price, quantity, supplier } = service;
  return (
    <div className="service">
      <img src={img} className="w-100 rounded-3" alt="img" />
      <h2>{name}</h2>
      <p>
        Desc : {description}
      </p>
      <p>
        Quantity : {quantity}
      </p>
      <p>Price: {price}</p>
      <p>
        <small>{supplier}</small>
      </p>
      <button className="btn btn-info">Update Service</button>
    </div>
  );
};

export default Service;
