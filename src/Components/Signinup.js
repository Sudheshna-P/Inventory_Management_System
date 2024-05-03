import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./Signinup.css";
import loginimg from "../Images/loginimg.svg";
import signupimg from "../Images/signup.svg";

function Signinup() {
  useEffect(() => {
    const handleSignUpClick = () => {
      const container = document.querySelector(".container7");
      container.classList.add("sign-up-mode");
    };

    const handleSignInClick = () => {
      const container = document.querySelector(".container7");
      container.classList.remove("sign-up-mode");
    };

    const sign_up_btn = document.querySelector("#sign-up-btn");
    const sign_in_btn = document.querySelector("#sign-in-btn");

    sign_up_btn.addEventListener("click", handleSignUpClick);
    sign_in_btn.addEventListener("click", handleSignInClick);

    return () => {
      sign_up_btn.removeEventListener("click", handleSignUpClick);
      sign_in_btn.removeEventListener("click", handleSignInClick);
    };
  }, []); 

  return (
    <div className="container7">
      <div className="forms">
        <div className="signin-signup">
          <form className="signin">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FaUser className="icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FaLock className="icon" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn1 solid" />
          </form>
          <form className="signup">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FaUser className="icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FaLock className="icon" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <FaLock className="icon" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <input type="submit" className="btn1" value="Sign up" />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>If you don't have an account, create one</p>
            <button className="btn2 transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={loginimg} className="image" alt="signin" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>If already resistered sign in</p>
            <button className="btn2 transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>

          <img src={signupimg} className="image" alt="signup" />
        </div>
      </div>
    </div>
  );
}

export default Signinup;