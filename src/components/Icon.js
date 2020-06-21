import React from "react";
import { FaTimes, FaPencilAlt, FaDotCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaDotCircle className="icon" color="#FF4848" />;
    case "cross":
      return <FaTimes className="icon" color="#25CCF7" />;
    default:
      return <FaPencilAlt className="icon" />;
  }
};

export default Icon;
