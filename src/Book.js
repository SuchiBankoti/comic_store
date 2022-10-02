import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LibraryContext } from "./Contexts/LibraryContext";
import { FaReadme } from "react-icons/fa";
export default function Book(props) {
    const { status, buyBook } = useContext(LibraryContext)
    const Book = props.book
    return (
        <>
            {Book ?
                <>
                    <img alt="cover" className="cover-image" src={process.env.PUBLIC_URL + `Images/${Book.bookCover}`} />
                    <div>
                        <div className="title" onClick={() => { buyBook(Book.id) }}>
                            <Link to={`/buybook/${Book.id}`} className="link">{Book.title}</Link>
                        </div>
                        <div className="author">{Book.author}</div>
                    </div>
                    <div>

                        <div style={{ color: Book.read ? "pink" : "cadetblue" }} className="read-status">
                            <FaReadme onClick={() => status(Book.id)} style={{ color: Book.read ? "#fd5e79" : "#306264" }} className="read-btn" />
                            {Book.read ? "Currently reading" : "Read Me"}
                        </div>

                    </div>

                </>

                :
                <h1>Sorry.. We can not find your Book </h1>
            }
        </>
    )
}