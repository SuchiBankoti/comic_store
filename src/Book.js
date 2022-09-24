import React from "react";
export default function Book(props) {
    const Book = props.book
    return (
        <>
            {Book ?
                <div className="book">
                    <img alt="cover" className="cover-image" src={process.env.PUBLIC_URL + `Images/${Book.bookCover}`} />
                    <div>{Book.title}</div>
                    <div>{Book.author}</div>
                </div>
                :
                <h1>Sorry.. We can not find your Book </h1>}
        </>
    )
}