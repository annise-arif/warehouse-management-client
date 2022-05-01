import React from "react";
import { useNavigate } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
  const {_id, img, name, description, price, quantity, supplier } = service;
  const navigate = useNavigate();
  const updateService = (id) =>{
    navigate(`/updateservice/${id}`)
  }
  return (
    <div className="service">
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
      <button onClick={()=> updateService(_id)} className="btn btn-info">Update Service</button>
    </div>
  );
};

export default Service;
