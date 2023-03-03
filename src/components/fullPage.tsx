import { useState } from "react";
import React = require("react");

export const FullPageUpdate = () => {
  const [count, setCount] = useState<number>(0);
  console.log("count", count);
  return (
    <>
      <button onClick={() => setCount(5)}>变5</button>
      <button onClick={() => setCount(1)}>变1</button>
    </>
  );
};
