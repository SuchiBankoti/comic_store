import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import SignUpForm from "./SignUpForm";



export default function FrontPage() {


    const { search, signingIn } = useContext(LibraryContext)

    const [searchVar, setSearchVar] = useState("")
    function getSearch(event) {
        setSearchVar(event.target.value)
    }

    return (
        <div className="front-page">
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

    )
}