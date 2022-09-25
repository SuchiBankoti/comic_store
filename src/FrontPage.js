import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import SignUpForm from "./SignUpForm";
import Book from "./Book"
import { FaSearch } from "react-icons/fa";

export default function FrontPage() {

    const { search, signingIn, books } = useContext(LibraryContext)

    const [searchVar, setSearchVar] = useState("")
    function getSearch(event) {
        setSearchVar(event.target.value)
    }

    return (
        <div className="front-page">
            <div className="header">
                {signingIn ? <SignUpForm className="signform" /> : ""}
                <div>
                    <h1><Link to="/Library" className="link">Browse Our Collection</Link></h1>

                </div>
                <div className="search-bar">
                    <form>
                        <label>
                            <input className="search"
                                type="text"
                                placeholder="Search by the Title or the Author"
                                value={searchVar}
                                onChange={getSearch}
                            />
                        </label>
                    </form>
                    <button onClick={() => search(searchVar)} className="search-btn"><FaSearch /></button>
                </div>
            </div>
            <div className="new-arrivals">
                <h3>New Arrivals</h3>
                <div>
                    <div className="book">
                        <Book book={books[0]} />
                    </div>
                    <div className="book">
                        <Book book={books[1]} />
                    </div>
                    <div className="book">
                        <Book book={books[2]} />
                    </div>
                    <div className="book">
                        <Book book={books[3]} />
                    </div>
                </div>
            </div>
        </div>

    )
}