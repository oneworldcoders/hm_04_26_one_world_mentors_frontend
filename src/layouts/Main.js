import React from 'react'
import './main.css';

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
        <a className="link" href="/register">
          Register
        </a>
        <a className="link" href="/login">
          Login
        </a>
        <a className="link" href="/about">
          About
        </a>
      </div>
      <div className="hero">
        {children}
      </div>
    </div>
  )
}
