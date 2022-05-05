import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ManageService = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  const { img, name, description, price, supplier } = services;

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setServices(res))
  }, [id]);

  const updateQuantity = (event) =>{
    event.preventDefault();
    const newQuantity = event.target.updateValue.value;
    const quantity = parseInt(services.quantity) + parseInt(newQuantity);
    console.log("new quantity increase", quantity);
    const allQuantity = { img, name, description, quantity, price, supplier };

    const url = `http://localhost:5000/service/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({quantity})
    })
    .then(res => res.json())
    .then(data => {
      console.log('success', data);
      setServices(allQuantity)
      event.target.reset();
    })

  };

  const handleDelevered = (id) =>{
    const newQuantity = parseInt(services.quantity) -1;
    const quantity = newQuantity;
    console.log("new quantity decrease", quantity);
    const decQuantity = { img, name, description, quantity, price, supplier };

    fetch(`http://localhost:5000/delivered/${id}`, {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({quantity})
    })
    .then(res => res.json())
    .then(data => {
      alert('are you sure to delevered');
      setServices(decQuantity);
      console.log('success', data);
    })
  }
  return (

    <div className="container-fluid mt-5 ms-5">
    <Nav.Link as={Link} to="/manageitems">
                <button className="btn btn-info pt-1 mb-4">Manage All Inventory</button>
              </Nav.Link>
      <div className="service w-25 mx-auto">
        <img src={img} className="w-100 rounded-3" alt="img" />
        <h2 className="pt-4">{name}</h2>
        <div className="p-2">
          <p>{description}</p>
          <p><b>Quantity : {services.quantity}</b></p>
          <p>Price: ${price}</p>
          <p>
            <small>Supplier: {supplier}</small>
          </p>
        </div>
        <button onClick={() => handleDelevered(services._id)} className="btn btn-info">Delevered</button>
        <form onSubmit={updateQuantity} className="mt-4">
          <input className="me-2 p-1" type="number" name="updateValue" required id="" />
          <input className="btn btn-info" type="submit" value="Add" />
        </form>
      </div>
      
    </div>
  );
};

export default ManageService;
