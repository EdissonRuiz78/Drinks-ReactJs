import React from "react";

const Error = ({ message }) => {
  return (
    <div className="row">
      <div className="col-12">
        <p className="text-center text-white bg-danger p-2 mt-4">{message}</p>
      </div>
    </div>
  );
};

export default Error;
