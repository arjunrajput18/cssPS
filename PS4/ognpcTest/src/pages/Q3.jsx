import React from "react";
import "../style/Q3.css";
import animal from "../image/animal.jpg"
import birds from "../image/birds.jpg"
import nature from "../image/nature.jpg"
export const Q3 = () => {
  return (
    <div>
      <div className="innerContainer">
        <h2>Photo Gallery</h2>

        <ul>
          <li>All</li>
          <li>Nature</li>
          <li>Birds</li>
          <li>Animals</li>
        </ul>
        <ul>
          <li>
            <img src={animal} alt="img" height={130} width={130}/>
          </li>
          <li>
          <img src={birds} alt="img" height={130} width={130}/>
          </li>
          <li>
          <img src={nature} alt="img" height={130} width={130}/>
          </li>
        </ul>
      </div>
    </div>
  );
};
