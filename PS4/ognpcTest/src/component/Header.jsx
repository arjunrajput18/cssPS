import React from 'react'
import { NavLink } from 'react-router-dom'




export const Header = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/q1">Q1</NavLink>{" "}
        <NavLink to="/q2">Q2</NavLink>|{" "}
        <NavLink to="/q3">Q3</NavLink>|{" "}
        <NavLink to="/q4">Q4</NavLink>|{" "}
        <NavLink to="/q5">Q5</NavLink>|{" "}
    </div>
  )
}
