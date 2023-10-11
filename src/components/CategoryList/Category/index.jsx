/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Category.css";

import React from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  const item = props.data;

  return (
    <div className="col-sm-3 category">
      <div className="card p-sm-2 rounded-lg">
        {/* <img src='https://placehold.it/400/88888' alt='' className='card-image-top' /> */}
        <img
          src="https://placehold.co/365x400/tomato/white"
          alt=""
          className="card-image-top"
        />
        <div className="card-body text-center">
          <Link
            className="card-title"
            style={{ color: "black", textDecoration: "none" }}
            to="/books"
          >
            {item.catName}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
