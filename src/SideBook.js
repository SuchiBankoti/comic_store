import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";


import { FaReadme, FaStar, FaStarHalf, FaCartArrowDown, FaEuroSign } from "react-icons/fa";
export default function SideBook() {

    const { status, books } = useContext(LibraryContext)
    const { id } = useParams()
    const book = books.find(book => book.id === id);

    return (
        <div className="buy-page">
            <div className="buy-page-left">
                <div className="buy-cover"><img alt="" src={process.env.PUBLIC_URL + `Images/${book.bookCover}`} /></div>
                <div>{book.About}</div>
                <div style={{ color: book.read ? "pink" : "cadetblue" }} className="read-status">
                    <FaReadme onClick={() => status(book.id)} style={{ color: book.read ? "#fd5e79" : "#306264" }} className="read-btn" />
                    {book.read ? "Currently reading" : "Read Me"}
                </div>
            </div>

            <div className="buy-page-right">
                <h1>{book.title}</h1>
                <div><h2>Price:200<FaEuroSign /></h2><p>Tax included. Excluding Shipping cost</p></div>
                <button className="add-btn">Add To Cart <FaCartArrowDown /></button>
                <button className="buy-btn">Buy Now </button>
                <div>
                    <h4>Product information</h4>
                    <p>{book.author}</p>
                    <div className="rating"><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
                    <div className="year">{book.year}</div>
                    <div className="lang">Original-language: {book.lang}</div>
                </div>
            </div>

        </div>)

}