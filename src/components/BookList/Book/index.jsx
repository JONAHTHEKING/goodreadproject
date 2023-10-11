/* eslint-disable jsx-a11y/anchor-is-valid */

import "./book.css";

import React from "react";
import { useNavigate } from "react-router-dom";

const Book = (props) => {
  const book = props.data;
  const nav = useNavigate();

  const handleClick = (book) => {
    nav("/bookDetail", { state: book });
  };
  return (
    <div className="col-md-4 mb-4">
      <div className="card p-2 card-items">
        <img src={book.image} alt="" className="card-image-top image-div" />
        <div className="card-body">
          <h2 className="card-title title">{book.title}</h2>
          <a
            href="#"
            className="btn btn-dark btn-block"
            onClick={(e) => {
              e.preventDefault();
              handleClick(book);
            }}
          >
            Show Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
