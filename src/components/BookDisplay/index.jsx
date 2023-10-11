/* eslint-disable jsx-a11y/anchor-is-valid */

import "./BookDisplay.css";

import React from "react";

const BookDisplay = (props) => {
  const book = props.data;
  return (
    <div className="col-md-3 mt-4 ml-4">
      <div className="card p-3 rounded">
        <img src={book.image} alt="" className="card-image-top rounded" />
        <div className="card-body">
          <h2 className="card-title text-center">{book.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default BookDisplay;
