import React from "react";
import Book from "../Book/Book";

const Search = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-md-6 offset-md-3">
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
              <input
                type="text"
                className="form-control form-control-lg"
                id="inlineFormInputGroupUsername2"
                placeholder="Search...."
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-center mb-4">
          <Book />
          <Book />

          <Book />

          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </>
  );
};

export default Search;
