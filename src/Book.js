import React from "react";
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";


export default function Book(props) {
    const { status } = useContext(LibraryContext)
    const Book = props.book
    return (
        <>
            {Book ?

                <div className="book-box">
                    <div>
                        <img src={process.env.PUBLIC_URL + `Images/${Book.bookCover}`} />
                    </div>
                    <div className="book-details">
                        <div>{Book.title}</div>
                        <div>{Book.author}</div>
                        <div>{Book.Rating}</div>
                        <div>{Book.year}</div>
                        <div>{Book.lang}</div>
                        <div>{Book.About}</div>
                    </div>
                    <div className="book-btns">
                        <button onClick={() => status(Book.id)} style={{ background: Book.read ? "red" : "grey" }} className="read-btn"></button>
                    </div>
                </div>
                :
                <h1>Sorry.. We can not find your Book </h1>}

        </>
    )
}