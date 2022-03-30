import { useEffect, useState } from "react";

const useProducts = () => {
  const [prosucts, setProsucts] = useState([]);
  useEffect(() => {
    const url = `products.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProsucts(data));
  }, []);
  return [prosucts, setProsucts];
};

export default useProducts;
