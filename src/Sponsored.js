import React from "react";
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Sponsored() {
    const { books } = useContext(LibraryContext)

    return (
        <>
            <div className="sponsor-first">
                <p>sponsored <FaExclamationCircle /></p>
                <img
                    alt="cover"
                    className="sponsor-img"
                    src={`/Images/${books[0].bookCover}`}
                />
            </div>
            <div className="sponsor-info">
                <h3>Collection of 10 Books from Shakespere</h3>
                <div>{books[0].Rating}</div>
                <div>PaperBack</div>
                <div>Rs{books[0].price}</div>
                <h3 style={{ background: "yellow" }}> <Link to={`/buybook/${books[0].id}`} className="link">Buy Now</Link></h3>
                <p>Get it by Friday.
                    Free Delivery above Rs499.
                    Fulfilled by OpenBooks</p>
            </div>
        </>
    )
}