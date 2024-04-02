import React from "react";
import Custominput from "../components/Custominput";

const AddColor = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Color</h3>
      <div>
        <form>
          <Custominput type="color" label="Enter Color"></Custominput>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddColor;
