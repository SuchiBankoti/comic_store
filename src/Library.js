import React, { useContext, useState } from "react";
import Book from "./Book";
import { nanoid } from "nanoid";
import { LibraryContext } from "./Contexts/LibraryContext";

export default function Library() {
    const [edit, setEdit] = useState(false)
    const { remove, books } = useContext(LibraryContext)
    let library = books.map((obj) => {
        return (<div key={nanoid()} className="book">
            <Book book={obj} />
            {edit ? <button onClick={() => remove(obj.id)}>Remove</button> : ""}
        </div>)
    })
    return (
        <div className="library">
            <div className="library-sidebar">
                <div className="account">
                    <div className="profile">
                        <img alt="" />
                        <div>Pink Panther</div>
                    </div>
                </div>
                <div>Your Books</div>
                <div>Add Books</div>
                <div onClick={() => { setEdit(prev => !prev) }}>Remove Books</div>
            </div>
            <div className="library-mainpage">
                <div className="filter">
                    <div>Categories</div>
                    <div>Horror</div>
                    <div>Sci-Fi</div>
                    <div>Classics</div>
                    <div></div>
                </div>
                <div className="collection">{library}</div>
            </div>


        </div>)
}

