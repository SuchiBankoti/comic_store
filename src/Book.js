import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LibraryContext } from "./Contexts/LibraryContext";
import { FaReadme, FaRupeeSign } from "react-icons/fa";

export default function Book(props) {
  const { status } = useContext(LibraryContext);
  const book = props.book;
  return (
    <>
      <img
        alt="cover"
        className="cover-image"
        src={`/Images/${book.bookCover}`}
      />
      <div className="book-info">
        <div className="title">
          <Link to={`/buybook/${book.id}`} className="link">
            {book.title}
          </Link>
        </div>
        <div className="author">{book.author}</div>
      </div>
      <div>
        {book.price}
        <FaRupeeSign style={{ height: 10 }} />
      </div>
      <div
        style={{ color: book.read ? "pink" : "cadetblue" }}
        className="read-status"
      >
        <FaReadme
          onClick={() => status(book.id)}
          style={{ color: book.read ? "#fd5e79" : "#306264" }}
          className="read-btn"
        />
        {book.read ? "Currently reading" : "Read Me"}
      </div>
    </>
  );
}
