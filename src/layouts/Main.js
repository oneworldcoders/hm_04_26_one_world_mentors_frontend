import React from 'react'
import './main.css';
import {Link} from "react-router-dom";

export default function Main({ children }) {
  return (
    <div className="welcome">
      <div className="menu">
        <div className="logo">
          Mentors
        </div>
        <div className="action">
          Become a Mentor
        </div>
        <Link to="" className="link">
          Register
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="" className="link">
          About
        </Link>
      </div>
      <div className="hero">
        {children}
      </div>
    </div>
  )
}
