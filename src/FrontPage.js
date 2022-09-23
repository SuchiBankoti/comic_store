import React, { useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import Navbar from "./Navbar";



export default function FrontPage() {


    const { search } = useContext(LibraryContext)

    const [searchVar, setSearchVar] = useState("")
    function getSearch(event) {
        setSearchVar(event.target.value)
    }

    return (
        <div className="front-page">
            <h1><Link to="/Library">Browse our collection</Link></h1>
            <div className="search-bar">
                <div className="bar">
                    <form>
                        <label>
                            <input className="search"
                                type="text"
                                placeholder="Search..."
                                value={searchVar}
                                onChange={getSearch}
                            />
                        </label>
                    </form>
                </div>
                <div className="search-button">
                    <Link to="/searchBook"><button onClick={() => search(searchVar)} className="search-btn">search</button></Link>
                </div>
            </div>
        </div>

    )
}