import React from "react";
import Link from "next/link";
import { AiOutlineSound } from "react-icons/ai";

import { useStateContext } from "../context/StateContext";

const Alert = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="alert-container">
      <div className="alert-icon">
        <AiOutlineSound />
      </div>
      <div className="alert-text">Black Friday Day Sale : Up to 50% off</div>
    </div>
  );
};

export default Alert;
