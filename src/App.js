import "./styles.css";
import React, { useState } from "react";
export default function () {
  const [name, setName] = useState("ajay");
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
