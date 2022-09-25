import React from "react";
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import { FaReadme, FaStar, FaStarHalf, FaCartArrowDown, FaEuroSign } from "react-icons/fa";
export default function SideBook() {

    const { status, buy } = useContext(LibraryContext)
    const Book = buy[0]

    return (
        <div className="buy-page">
            <div className="buy-page-left">
                <div className="buy-cover"><img alt="" src={process.env.PUBLIC_URL + `Images/${Book.bookCover}`} /></div>
                <div>{Book.About}</div>
                <div style={{ color: Book.read ? "pink" : "cadetblue" }} className="read-status">
                    <FaReadme onClick={() => status(Book.id)} style={{ color: Book.read ? "#fd5e79" : "#306264" }} className="read-btn" />
                    {Book.read ? "Currently reading" : "Read Me"}
                </div>
            </div>

            <div className="buy-page-right">
                <h1>{Book.title}</h1>
                <div><h2>Price:200<FaEuroSign /></h2><p>Tax included. Excluding Shipping cost</p></div>
                <button className="add-btn">Add To Cart <FaCartArrowDown /></button>
                <button className="buy-btn">Buy Now </button>
                <div>
                    <h4>Product information</h4>
                    <p>{Book.author}</p>
                    <div className="rating"><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
                    <div className="year">{Book.year}</div>
                    <div className="lang">Original-language: {Book.lang}</div>
                </div>
            </div>

        </div>)

}