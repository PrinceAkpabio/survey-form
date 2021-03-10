import React from "react";

export const Input = ({ handleChange, label, value, type, ...otherProps }) => (
  <div className="input-group">
    <input
      className="form-input"
      onChange={handleChange}
      type={type}
      value={value}
      {...otherProps}
    />
    {label ? (
      <label className={`label ${value && "shrink"}`}>{label}</label>
    ) : null}
    {console.log("key: ", otherProps.key)}
    {/* { otherProps.errors.length > 0 && (
      <span className="error">{otherProps.errors}</span>
    )} */}
  </div>
);

export const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <div className="input-group">
    <textarea
      className="form-input"
      onChange={handleChange}
      value={value}
      type={otherProps.type}
      {...otherProps}
    />
    {label ? (
      <label className={`label ${value && "shrink"}`}>{label}</label>
    ) : null}
    {/* { otherProps.errors.length > 0 && (
      <span className="error">{otherProps.errors}</span>
    )} */}
  </div>
);

export const CustomInput = ({
  handleChange,
  type,
  label,
  value,
  ...otherProps
}) => (
  <div className="input-group">
    {type === "textarea" ? (
      <textarea
        className="form-input"
        onChange={handleChange}
        value={value}
        type={otherProps.type}
        rows="5"
        {...otherProps}
      />
    ) : (
      <input
        className="form-input"
        onChange={handleChange}
        type={type}
        value={value}
        {...otherProps}
      />
    )}
    {label ? (
      <label className={`label ${value && "shrink"}`}>{label}</label>
    ) : null}
    {/* { otherProps.errors.length > 0 && (
      <span className="error">{otherProps.errors}</span>
    )} */}
  </div>
);
