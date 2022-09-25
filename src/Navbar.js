import { Link } from "react-router-dom"
import sign from "./sign.png"
import { FaHome, FaBook } from 'react-icons/fa'
import SignUpForm from "./SignUpForm";


export default function Navbar() {


    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/Library" className="link"><h1>LIBRARY</h1></Link><FaBook />
            </div>
            <div className="nav-right">
                <div>
                    <SignUpForm />
                </div>
                <Link to="/" ><FaHome className="homeicon" /></Link>
                <img alt="" src={sign} />

            </div>
        </nav>
    )
}