/* eslint-disable jsx-a11y/anchor-is-valid */

import "./form.css";

import React from "react";

const ReviewForm = () => {
  return (
    <div className="form-container">
      <h2 className="text-center">Write A Review</h2>
      <div className="form-section">
        <label htmlFor="message">What did you think ?</label>
        <textarea rows={14} cols={120}></textarea>
      </div>
      <a href="#" className="btn btn-lg btn-block btn-primary">
        Add Review
      </a>
    </div>
  );
};

export default ReviewForm;
