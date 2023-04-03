import React from "react";
import classes from "./FormInput.module.css";

const FormInput = ({ labelText, type, name, id }) => {
  return (
    <div className={classes.inputElement}>
      {labelText ? <label htmlFor={id}>{labelText} </label> : null}
      {type === "textarea" ? (
        <textarea rows={7} />
      ) : (
        <input id={id} type={type} name={name} />
      )}
    </div>
  );
};

export default FormInput;
