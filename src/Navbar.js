import { useContext } from "react";
import { Link } from "react-router-dom"
import { LibraryContext } from "./Contexts/LibraryContext";
import icon from "./icon.png"
import sign from "./sign.png"

export default function Navbar() {
    const { signUpData, setSigningIn } = useContext(LibraryContext)

    return (
        <nav className="navbar">
            <h1>LIBRARY</h1>
            <div className="navbar-right">
                <div><Link to="/" ><img className="icon" alt="" src={icon} /></Link></div>
                <div className="signIn" onClick={() => { setSigningIn(true) }}>
                    {signUpData === null ? "Sign Up" : "WELCOME"}
                    <img alt="" src={sign} />

                </div>
            </div>
        </nav>
    )
}