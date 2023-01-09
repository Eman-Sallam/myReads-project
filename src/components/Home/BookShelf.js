import React from "react";
import Book from "../Book/Book";

const BookShelf = ({ title }) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="row justify-content-center mb-4">
        <Book />
        <Book />

        <Book />

        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
};

export default BookShelf;
