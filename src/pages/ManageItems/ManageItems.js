import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useService from "../../Hook/useServiices";

const ManageItems = () => {
  const [services, setServices] = useService([]);

  const handleDelete = (id) =>{
    const proceed = window.confirm('You want to Delete');
    if(proceed){
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            
            const remaining = services.filter(s => s._id !== id);
            setServices(remaining);
        })
    }
  }
  return (
    <div className="container">
      <h1 className="mx-auto text-info py-4">Manage All Items</h1>
      <Nav.Link as={Link} to="/additem">
      <button className="btn btn-info text-white">    Add New Item </button>
              </Nav.Link>
      <div className="ms-5">
      <div className="d-flex flex-wrap mx-auto ms-5 ps-5">
      {services.map((service) => (
        <div key={service._id} className=" w-25 m-4">
          <div className="service">
            <img src={service.img} className="w-100 rounded-3" alt="img" />
            <h2 className="pt-4">{service.name}</h2>
            <div className="p-2">
              <p>{service.description}</p>
              <p>
                <b>Quantity : {service.quantity}</b>
              </p>
              <p>Price: ${service.price}</p>
              <p>
                <small>{service.supplier}</small>
              </p>
            </div>
            <button onClick={()=> handleDelete(service._id)} className="btn btn-info">
              <b className="text-danger">X</b> Delete Service
            </button>
          </div>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default ManageItems;
