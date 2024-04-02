import React from "react";

const Custominput = (props) => {
  const { type, label, i_id, i_clas } = props;
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${i_clas}`}
        id={i_id}
        placeholder={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Custominput;
