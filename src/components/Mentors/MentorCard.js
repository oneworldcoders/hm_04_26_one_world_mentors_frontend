import React from "react";
import MentorImage from "../../assets/dough.jpg";
import "../../pages/Dashboard/Dashboard.css";

const MentorCard = (props) => {
  return (
    <div className="dash-inner">
      <img style={{ width: "12rem" }} src={MentorImage} alt="mentor" />
      <h3 className="mentors-list">FirstName: {props.FirstName}</h3>
      <h3 className="mentors-list">LastName: {props.LastName}</h3>
      <h3 className="mentors-list">Email: {props.Email}</h3>
      <h3 className="mentors-list">Role: {props.Role}</h3>
    </div>
  );
};

export default MentorCard;
