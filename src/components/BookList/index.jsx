import Book from "./Book";
import BookData from "../../data/book";
import React from "react";

const BookList = () => {
  return (
    <div>
      <h2 className="text-center mb-4 mt-4">BookLists</h2>
      <div className="row">
        {BookData.map((book) => (
          <Book data={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
