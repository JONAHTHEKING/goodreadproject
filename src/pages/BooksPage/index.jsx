import BookList from "../../components/BookList";
import Navbar from "../../components/Navbar";
import React from "react";

const BooksPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <BookList />
      </div>
    </>
  );
};

export default BooksPage;
