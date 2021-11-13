import React, { useState } from "react";
import "./formInput.scss";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (event) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {/* !!!Ref handle!!! <input placeholder={props.placeholder} ref={props.refer} /> */}
      {/* !!!All Form Controling!!! <input placeholder={props.placeholder} name={props.name} /> */}
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
