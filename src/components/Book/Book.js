import React from "react";
import Style from "./Book.module.css";

const Book = () => {
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className={`card-img p-2 ${Style.book_img}`}>
          <img
            src="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body p-2">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        </div>
      </div>
      <div className="dropdown">
        <button
          className={`btn btn-primary rounded-circle dropdown-toggle ${Style.dd_btn}`}
          type="button"
          data-toggle="dropdown"
        ></button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="">
            Action
          </a>
          <a className="dropdown-item" href="">
            Another action
          </a>
          <a className="dropdown-item" href="">
            Something else here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
