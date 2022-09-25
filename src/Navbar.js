import { Link } from "react-router-dom"
import sign from "./sign.png"
import { FaHome } from 'react-icons/fa'
import SignUpForm from "./SignUpForm";


export default function Navbar() {


    return (
        <nav className="navbar">
            <Link to="/Library" className="link"><h1>LIBRARY</h1></Link>
            <div>
                <div>
                    <SignUpForm />
                </div>
                <Link to="/" ><FaHome className="homeicon" /></Link>

                <img alt="" src={sign} />

            </div>
        </nav>
    )
}