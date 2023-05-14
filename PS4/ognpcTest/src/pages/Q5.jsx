import React from "react";
import birds from "../image/birds.jpg";
import "../style/Q5.css";
export const Q5 = () => {
  return (
    <div className="mainContainer">
      <div className="innerContainer">
        <h1>Review Order</h1>{" "}
        <div className="detail">
          <div className="itemList">
            <b>ITEM</b>
            <img src={birds} alt="img" height={50} width={50} />
          </div>
          <div className="listdetails">
            <div className="qtyList">
              <b>QTY</b>
              <span>1</span>
            </div>
            <div className="price">
              <b>Total</b>
              <span> INR 999</span>
            </div>
          </div>
        </div>
        <div className="description">
          <p>Limited addition cactus print bag 1 liter, green color</p>
        </div>
        <div className="flexrow">
          <span>subtotal</span>
          <b>INR 999</b>
        </div>
        <div className="flexrow">
          <span>GST</span>
          <b>INR 179</b>
        </div>
        <div className="flexrow">
          <b>Grand Total</b>
          <b>INR 1178</b>
        </div>
        <button>PLace ORDER</button>
        <p className="secured">Cart Secured by RazorPay</p>
      </div>
    </div>
  );
};
