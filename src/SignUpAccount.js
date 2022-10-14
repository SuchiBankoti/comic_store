import React, { useContext, useState } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import ProfilePic from "./shakes.png";
import AddBookForm from "./AddBookForm";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import sign from "./sign.png";
import { FaHeart } from "react-icons/fa";

export default function SignUpForm() {
  const { signIn, signInData } = useContext(LibraryContext);

  const [signUpData, setSignUpData] = useState({
    UserId: "",
    Password: "",
  });
  function handleSignUp(event) {
    setSignUpData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div>
      <Popup
        trigger={
          <div>
            {signInData === null ? <FaHeart
              className="heart"
              style={{ color: "white" }}
            /> : <img className="profilePic" alt="" src={ProfilePic} />}
          </div>
        }
        position="bottom right"
      >
        {signInData === null ?
          <div className="signUp-page">
            <h3>Sign Up</h3>
            <img alt="" src={sign} />
            <form>
              <label>
                User-Id:
                <input
                  type="text"
                  name="UserId"
                  value={signUpData.UserId}
                  onChange={handleSignUp}
                />
              </label>
              <br />
              <br />
              <label>
                Password:
                <input
                  type="text"
                  name="Password"
                  value={signUpData.Password}
                  onChange={handleSignUp}
                />
              </label>
            </form>
            <button onClick={() => signIn(signUpData)}>Submit</button>
          </div> :
          <div>
            <div className="account">
              <img alt="" src={ProfilePic} />
              <div>Pink Panther</div>
            </div>
            <div>
              <AddBookForm />
            </div>
          </div>
        }
      </Popup>
    </div>
  );
}
