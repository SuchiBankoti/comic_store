import React, { useContext } from "react";
import Book from "./Book";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom"
import { LibraryContext } from "./Contexts/LibraryContext";
import Navbar from "./Navbar";

export default function Library() {
    const { remove, books } = useContext(LibraryContext)
    let library = books.map((obj) => {
        return (<div key={nanoid()} >
            <Book book={obj} />
            <button onClick={() => remove(obj.id)}>Remove</button>
        </div>)
    })
    return (
        <div className="library">
            <div className="content">
                <div className="library-sidebar">
                    <Link to="/Library/Add"> <button>Add Book</button></Link>
                </div>
                <div className="library-mainpage">
                    {library}
                </div>
            </div>

        </div>)
}

