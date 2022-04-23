import { useEffect, useState } from "react";

const useProducts = () => {
  const [prosucts, setProsucts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProsucts(data));
  }, []);
  return [prosucts, setProsucts];
};

export default useProducts;
