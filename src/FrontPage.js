import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import SignUpForm from "./SignUpForm";
import Book from "./Book"


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
                    <Link to="/Library" className="link">Browse Our Collection</Link>

                </div>
                <div className="search-bar">
                    <div className="bar">
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
                    </div>
                    <button onClick={() => search(searchVar)} className="search-btn"></button>
                </div>
            </div>
            <div className="new-arrivals">
                <h3>New Arrivals</h3>
                <div>
                    <Book book={books[0]} />
                    <Book book={books[1]} />
                    <Book book={books[2]} />
                    <Book book={books[3]} />
                    <Book book={books[4]} />
                </div>
            </div>
        </div>

    )
}