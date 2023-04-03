import React from "react";
import classes from "./Badge.module.css";

const Badge = ({ bgColor, text, textColor }) => {
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className={classes["badge"]}
    >
      {text}
    </div>
  );
};

export default Badge;
