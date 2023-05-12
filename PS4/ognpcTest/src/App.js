import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./component/Header";
import { Q1 } from "./pages/Q1";
import { Q2 } from "./pages/Q2";
import { Q3 } from "./pages/Q3";
import { Q4 } from "./pages/Q4";
import { Q5 } from "./pages/Q5";

const App = () => {
  return (
    <div>
<Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/q1" element={<Q1/>}></Route>
        <Route path="/q2" element={<Q2/>}></Route>
        <Route path="/q3" element={<Q3/>}></Route>
        <Route path="/q4" element={<Q4/>}></Route>
        <Route path="/q5" element={<Q5/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
