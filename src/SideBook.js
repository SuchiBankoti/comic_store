import React from "react";
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
export default function SideBook() {

    const { status, buy } = useContext(LibraryContext)
    const Book = buy[0]

    return (
        <div className="buy-page">
            <div>
                <div><img alt="" src={process.env.PUBLIC_URL + `Images/${Book.bookCover}`} /></div>
                <div className="book-details">
                    <h1>{Book.title}</h1>
                    <div>{Book.author}</div>
                    <div>{Book.Rating}</div>
                    <div>{Book.year}</div>
                    <div>{Book.lang}</div>
                    <p>{Book.About}</p>
                    <button onClick={() => status(Book.id)} style={{ background: Book.read ? "red" : "grey" }} className="read-btn"></button>
                </div>
            </div>
        </div>)

}