import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { LibraryContext } from "./Contexts/LibraryContext";


export default function SignUpForm() {

    const { signIn } = useContext(LibraryContext)

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
        <div>
            <form>
                <input
                    type="text"
                    name="UserId"
                    value={signUpData.UserId}
                    onChange={handleSignUp}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="Password"
                    value={signUpData.Password}
                    onChange={handleSignUp}
                />

            </form>
            <Link to="/"><button onClick={() => signIn(signUpData)}>Submit</button></Link>
        </div>

    )
}