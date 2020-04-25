import React from 'react'
import './welcome.css';
import Main from '../layouts/Main';

export default function welcome() {
  return (
    <Main>
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
    </Main>
  )
}
