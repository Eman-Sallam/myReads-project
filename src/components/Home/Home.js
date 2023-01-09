import React from "react";
import BookShelf from "./BookShelf";

const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <BookShelf title="Currently Reading" />
        <BookShelf title="Want to Read" />
        <BookShelf title="Read" />
      </div>
    </>
  );
};

export default Home;
