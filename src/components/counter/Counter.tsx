import { useState, useEffect } from "react";

const Counter = () => {
  let [ctr, setCtr] = useState(0);
  useEffect(() => {
    setCtr(1);
  }, []);
  return ctr;
};

export default Counter;
