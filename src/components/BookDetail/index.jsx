import "./BookDetail.css";

import React from "react";

const BookDetail = (props) => {
  const book = props.data;
  return (
    <div>
      <div className="card mt-5 card-item">
        <div className="row no-gutters full-height">
          <div className="col-md-4 img-div">
            <img src={book.image} alt="book-img" className="image" />
          </div>
          <div className="col-md-8 body-div">
            <div className="card-body body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">{book.author}</p>
              <p className="card-text">
                <small className="text-muted">{book.description}</small>
              </p>
              <p className="card-text">
                rating : <span className="card-text">{book.rating}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
