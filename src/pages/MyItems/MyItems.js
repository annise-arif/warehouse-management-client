import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
import axios from "axios";
const MyItems = () => {
  const [user] = useAuthState(auth);
  const [service, setService] = useState([]);

  useEffect(() => {
    const getService = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/serviceByEmail/${email}`;
      const { data } = await axios.get(url);
      setService(data);
    };
    getService();
  }, []);

  const handleDelete = (id) =>{
    const proceed = window.confirm('You want to Delete');
    if(proceed){
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = service.filter(s => s._id !== id);
            setService(remaining);
        })
    }
  }

  return (
    <div className="container">
      <h1 className="text-info py-5">My items</h1>
      <hr />
       
       {service.map((s) => (
          <div key={s._id}>
            <img className="w-25 py-4" src={s.img} alt="" />
            <h4>Name: {s.name}</h4>
            <p>Desc: {s.description}</p>
            <p>Quantity: {s.quantity}</p>
            <p>Price: ${s.price}</p>
            <h6>
              Delete Item <button onClick={() => handleDelete(s._id)}>X</button>
            </h6>
          </div>
        ))}
       
      
    </div>
  );
};

export default MyItems;
