import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
const MyItems = () => {
  const [user] = useAuthState(auth);
  const [service, setService] = useState([]);

  useEffect(() => {
    const getService = async () => {
      const email = user?.email;
      const url = `https://quiet-taiga-62097.herokuapp.com/serviceByEmail/${email}`;
      const { data } = await axios.get(url);
      setService(data);
    };
    getService();
  }, [service]);

  const handleDelete = (id) => {
    const proceed = window.confirm("You want to Delete");
    if (proceed) {
      const url = `https://quiet-taiga-62097.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = service.filter((s) => s._id !== id);
          setService(remaining);
        });
    }
  };

  return (
    <div className="container">
      <h1 className="text-info py-5">My items</h1>
      <hr />

      {service.map((s) => (
        <div key={s._id} className="border mt-5 w-50 mx-auto">
          <img className="w-100 pb-4" src={s.img} alt="" />
          <h4>Name: {s.name}</h4>
          <p className="w-100 p-1 mx-auto">Desc: {s.description}</p>
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
