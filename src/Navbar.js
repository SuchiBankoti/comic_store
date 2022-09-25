import { useContext } from "react";
import { Link } from "react-router-dom"
import { LibraryContext } from "./Contexts/LibraryContext";
import sign from "./sign.png"
import { FaHome } from 'react-icons/fa'

export default function Navbar() {
    const { signUpData, setSigningIn } = useContext(LibraryContext)

    return (
        <nav className="navbar">
            <Link to="/Library" className="link"><h1>LIBRARY</h1></Link>
            <div>
                <Link to="/" ><FaHome className="homeicon" /></Link>
                <div className="signIn" onClick={() => { setSigningIn(true) }}>
                    <p>{signUpData === null ? "Sign Up" : "WELCOME"}</p>
                    <img alt="" src={sign} />

                </div>
            </div>
        </nav>
    )
}