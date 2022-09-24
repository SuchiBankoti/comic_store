import React from "react";
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
export default function SideBook(props) {

    const { status } = useContext(LibraryContext)

    const Book = props.sidebook
    return (
        <>
            <img alt="" src={process.env.PUBLIC_URL + `Images/${Book.bookCover}`} />
            <div className="book-details">
                <h1 style={{ margin: 0, }}>{Book.title}</h1>
                <div style={{ fontFamily: "monospace" }}>{Book.author}</div>
                <div style={{ color: "maroon" }}>{Book.Rating}</div>
                <div style={{ fontStyle: "italic" }}>{Book.year}</div>
                <div>{Book.lang}</div>
                <div>{Book.About}</div>
                <button onClick={() => status(Book.id)} style={{ background: Book.read ? "red" : "grey" }} className="read-btn"></button>
            </div>

        </>)

}