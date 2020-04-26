import React from "react";
import { Link } from "react-router-dom";
import MentorCard from "./MentorCard";
import "./MentorsList.css";

const MentorsList = (props) => {
  const {
    mentors: {
      mentors: { mentors },
    },
  } = props;
  return (
    <div className="list">
      {mentors &&
        mentors.map((mentor) => (
          <Link to="#" key={mentor.id}>
            <MentorCard
              FirstName={mentor.first_name}
              LastName={mentor.last_name}
              Email={mentor.last_name}
              Role={mentor.user_type}
            />
          </Link>
        ))}
    </div>
  );
};

export default MentorsList;
