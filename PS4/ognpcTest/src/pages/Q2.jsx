import React from "react";
// Create a layout for a login form that includes input fields for the user's email and password, a "Login" button, and a "Forgot Password?" link. The layout should be centered horizontally on the page, and the input fields and button should be arranged vertically with some spacing between them. Create a layout as close to the image shown below.
import "../style/Q2.css"
export const Q2 = () => {
  return (
    <div className="container">
      <div className="innerContainer">
        <div className="center">
          <h2>Login</h2>
        </div>
        <div>
          <label><b>
            Email</b>
            <input  className="inputBox"/>
          </label>
        </div>
        <div>
        <label>
        <b>
            Password</b>
            <input  className="inputBox"/>
          </label>
        </div>
       
        <button >Login</button>
   
        <div  className="center">
        <p>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};
