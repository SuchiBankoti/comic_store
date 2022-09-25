import React, { useContext, useState } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import sign from "./sign.png"
import { FaHeart } from "react-icons/fa";


export default function SignUpForm() {

    const { signIn, signInData } = useContext(LibraryContext)

    const [signUpData, setSignUpData] = useState({
        UserId: "",
        Password: ""
    })
    function handleSignUp(event) {
        setSignUpData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
        <div >
            <Popup trigger={<div><FaHeart className="heart" style={{ color: signInData === null ? "grey" : "pink" }} /></div>} position="left center" >
                <div className="signUp-page">
                    <h3>Sign Up</h3>
                    <img alt="" src={sign} />
                    <form>
                        <label>User-Id:
                            <input
                                type="text"
                                name="UserId"
                                value={signUpData.UserId}
                                onChange={handleSignUp}
                            />
                        </label>
                        <br />
                        <br />
                        <label>Password:
                            <input
                                type="text"
                                name="Password"
                                value={signUpData.Password}
                                onChange={handleSignUp}
                            />
                        </label>
                    </form>
                    <button onClick={() => signIn(signUpData)}>Submit</button>
                </div>
            </Popup>
        </div>
    )

}