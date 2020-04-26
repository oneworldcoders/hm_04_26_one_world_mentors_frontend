import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

export default function Main({ children }) {
  return (
    <div className="welcome">
      <div className="menu">
        <Link style={{ color: "white" }} to="" className="logo">
          Mentors
        </Link>
        <Link to="" className="action">
          Become a Mentor
        </Link>
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
      <div className="hero">{children}</div>
    </div>
  );
}
