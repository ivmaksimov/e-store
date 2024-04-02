import React from "react";
import Custominput from "../components/Custominput";

const AddCat = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Category</h3>
      <div>
        <form>
          <Custominput type="text" label="Enter Category"></Custominput>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCat;
