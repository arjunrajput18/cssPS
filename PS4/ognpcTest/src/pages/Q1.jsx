import React from "react";
import "../style/Q1.css";
// Create a layout for a contact form that includes fields for name, email, message, and a submit button. The form should be centered horizontally on the page and the fields should be arranged vertically with appropriate spacing between them. The form should also have a label for each field. Create a layout as close to the image shown below.
export const Q1 = () => {
  return (
    <div className="container">
      <form className="innerContainer">
        <div className="nameLabel">
          <label>
            {" "}
            Name:
            <input type="text" className="spacing" />
          </label>
        </div>
        <div className="classLabel ">
          <label>
            {" "}
            Email:
            <input type="text" className="spacing" />
          </label>
        </div>
        <div className="classLabel ">
          <label>
            {" "}
            Message:
            <textarea type="text" className="spacing" cols={30} rows={5} />
          </label>
        </div>
        <div className="classLabel spacing">
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};
