import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>sign up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
          </div>
          <button>continue</button>
          <p className="loginsignup-login">
            already have an account <span>login here!!</span>
          </p>

          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>by contie terms & conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
