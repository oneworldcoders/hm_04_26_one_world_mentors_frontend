import React from 'react'
import './welcome.css';

export default function welcome() {
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
        <div className="left">
          <div className="tagline">
            Interested in becoming a Software Developer in months?
          </div>
          <div className="subtitle">
            Register and meet a mentor.
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}
