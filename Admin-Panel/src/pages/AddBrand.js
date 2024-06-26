import React from "react";
import Custominput from "../components/Custominput";

const AddBrand = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Brand</h3>
      <div>
        <form>
          <Custominput type="text" label="Enter Brand"></Custominput>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
