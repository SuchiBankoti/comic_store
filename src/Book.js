import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LibraryContext } from "./Contexts/LibraryContext";
export default function Book(props) {
    const { status, buyBook } = useContext(LibraryContext)
    const Book = props.book
    return (
        <>
            {Book ?
                <>
                    <img alt="cover" className="cover-image" src={process.env.PUBLIC_URL + `Images/${Book.bookCover}`} />
                    <div>{Book.title}</div>
                    <div>{Book.author}</div>
                    <div>
                        <button onClick={() => status(Book.id)} style={{ background: Book.read ? "red" : "grey" }} className="read-btn"></button>
                        <div onClick={() => { buyBook(Book.id) }}><Link to="/buybook">Buy Book</Link></div>
                    </div>
                </>

                :
                <h1>Sorry.. We can not find your Book </h1>}
        </>
    )
}