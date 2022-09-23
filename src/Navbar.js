import { useContext } from "react";
import { Link } from "react-router-dom"
import { LibraryContext } from "./Contexts/LibraryContext";

export default function Navbar() {
    const { signUpData } = useContext(LibraryContext)

    return (
        <nav className="navbar">
            <h1 >open library</h1>
            <div className="navbar-right">
                <div className="home"><Link to="/">Home</Link></div>
                <div className="signIn">
                    {signUpData === null ? "Sign Up" : "OOOO"}
                </div>
            </div>
        </nav>
    )
}