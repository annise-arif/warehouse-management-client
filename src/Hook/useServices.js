import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://quiet-taiga-62097.herokuapp.com/service")
      .then((res) => res.json())
      .then((res) => setServices(res));
  }, []);
  return [services, setServices];
};
export default useService;
