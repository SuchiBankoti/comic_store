import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LibraryContext } from "./Contexts/LibraryContext";
import { FaStar, FaReadme } from "react-icons/fa";


export default function Book(props) {
  const { status } = useContext(LibraryContext);
  const book = props.book;

  function ChangeRating(rating) {

    let arr = []
    for (let i = 0; i < rating.rating; i++) {
      arr.push(<FaStar className="rating-star" />)
    }
    return (<div>
      {arr}
    </div>)
  }

  return (
    <>
      <div className="image-container">
        <img
          alt="cover"
          className="cover-image"
          src={`/Images/${book.bookCover}`}
        />
      </div>
      <div className="book-info">
        <div style={{}}>
          {book.price}
        </div>

        <div style={{}}>
          {book.title}
        </div>
        <div style={{ fontFamily: "monospace" }}>{book.author}</div>
        <div >
          <ChangeRating rating={book.Rating} />
        </div>

        <Link to={`/buybook/${book.id}`} className="link" style={{ color: "white" }}>
          <button className="buy-btn" > Buy Now </button>
        </Link>

        <div
          style={{ color: book.read ? "pink" : "cadetblue" }}
          className="read-status" onClick={() => status(book.id)} >
          <FaReadme
            style={{ color: book.read ? "#fd5e79" : "#306264" }}
          />
          <div style={{}}>{book.read ? "Currently reading" : "Read Me"}</div>
        </div>
      </div>


    </>
  );
}



