import React, { useContext, useState } from "react";
import Book from "./Book";
import SideBook from "./SideBook";
import { nanoid } from "nanoid";
import { LibraryContext } from "./Contexts/LibraryContext";
import libIcon from "./lib.png"

export default function Library() {
    const [edit, setEdit] = useState(false)
    const { remove, books, showBookDetail, bookDetail } = useContext(LibraryContext)
    let library = books.map((obj) => {
        return (<div key={nanoid()} onClick={() => showBookDetail(obj)}>
            <Book book={obj} />
            {edit ? <button onClick={() => remove(obj.id)}>Remove</button> : ""}
        </div>)
    })
    return (
        <div className="library">
            <div className="sidebook-box">
                <SideBook sidebook={bookDetail} />
            </div>
            <div className="library-mainpage">
                <img alt="" src={libIcon} />
                <div>{library}</div>
            </div>
            <div className="library-sidebar">
                <div>
                    <div>Classic</div>
                    <div>Non-Fiction</div>
                    <div>Fiction</div>
                </div>
                <div>
                    <div>Add Books</div>
                    <div onClick={() => { setEdit(prev => !prev) }}>Remove Books</div>
                </div>
            </div>


        </div>)
}

