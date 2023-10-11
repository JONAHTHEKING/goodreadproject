/* eslint-disable jsx-a11y/anchor-is-valid */

import "./review.css";

import React from "react";
import { useNavigate } from "react-router-dom";

const Review = (props) => {
  const book = props.data;
  const nav = useNavigate();
  const handleClick = (book) => {
    nav("/addReview", { state: book });
  };
  return (
    <div className="review  mb-3">
      <h2 className="mb-4">Ratings & Review</h2>
      <a
        href="#"
        className="btn btn-warning btn-block btn-lg mt-2 mb-5"
        onClick={(e) => {
          e.preventDefault();
          handleClick(book);
        }}
      >
        Write a Review
      </a>
      <p className="mb-5 mt-2">** Displaying 0 review</p>
    </div>
  );
};

export default Review;
