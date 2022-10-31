import React, { useContext, useState } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import ProfilePic from "./sign.png";
import AddBookForm from "./AddBookForm";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function SignUpForm() {
  const { signIn, signInData } = useContext(LibraryContext);

  const [signUpData, setSignUpData] = useState({
    UserId: "",
    Password: "",
    Email: ""
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
      <Popup contentStyle={{ width: "80vh", height: "100vh" }}
        trigger={

          signInData === null ? <button className="sign-in-btn">Sign In</button>
            : <img className="profilePic" alt="" src={ProfilePic} />

        }

        position="bottom right"
      >
        {signInData === null ?
          <div className="form-container">
            <form className="signIn-form">
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
              <br />
              <br />
              <label>
                Email:
                <input
                  type="text"
                  name="Email"
                  value={signUpData.Email}
                  onChange={handleSignUp}
                />
              </label>
            </form>
            <button onClick={() => signIn(signUpData)}>Submit</button>
          </div> :
          <div className="profile">
            <div className="account">
              <img alt="" src={ProfilePic} />
              <div>Pink Panther</div>
              <div>Email-{signUpData.Email}</div>
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
