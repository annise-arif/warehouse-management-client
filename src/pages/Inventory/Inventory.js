import React, { useEffect, useState } from 'react';
import Service from '../Services/Service/Service';

const Inventory = () => {
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((res) => setServices(res));
  }, []);
    return (
        <div className="container-fluid">
      <h1 className="text-info py-4 mx-auto">All Items</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
    );
};

export default Inventory;