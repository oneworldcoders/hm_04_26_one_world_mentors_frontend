import React from 'react'
import './dashboardLayout.css';

export default function DashboardLayout({ children }) {
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
      <div className="choko">
        {children}
      </div>
    </div>
  )
}
