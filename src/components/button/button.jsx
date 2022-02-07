import React from "react";
import { PlusBTNSvg } from "../svg";
import "./index.css";
const Button = ({ value, action }) => {
  return (
    <div className="app-button" onClick={action}>
      <button>{value}</button>
      <PlusBTNSvg />
    </div>
  );
};

export default Button;
