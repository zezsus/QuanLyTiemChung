import React from "react";
import "../assets/styles/SignIn.scss";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="container">
        <h1>SignIn</h1>
        <form>
          <div className="form-input">
            <label>Username</label>
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-input">
            <label>Password</label>
            <input type="text" placeholder="Password" />
          </div>
          <button type="submit">SignIn</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
