import React, { Component } from "react";
import "./rightFrame.css";
import "../../../components/Mentors/MentorsList.css";
class RightFrame extends Component {
  render() {
    return (
      <>
        <div className="right-frame-wrapper">
          <div className="right-frame-upper">
            <div className="notification">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="profile-image">
              <img className="img-circle" src="../../../assets/dough.jpg" />
            </div>
            <div className="full-name ">Doug Bradbury</div>
            <div className="elem-gap">
              <span className="role">Mentor</span>
            </div>
            <div className="elem-gap">
              <span className="company">Mentor at One World Coders</span>
            </div>
          </div>
          <div className="right-frame-lower">
            <div>
              <span className="stack">
                Enrolled for Fullstack Ruby on Rail Track
              </span>
            </div>
            <div className="gap">
              <span className="rmentee-pogress-bar">66% Complete</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default RightFrame;