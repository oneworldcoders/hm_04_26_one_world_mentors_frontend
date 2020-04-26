import React, { Component } from "react";
import { fetchMentors } from "../redux/actions/fetchMentorsAction";
import { connect } from "react-redux";
import "./Dashboard.css";
import MenteeImage from "../assets/henry.jpg";
import { Link } from "react-router-dom";
import MentorsList from "./MentorsList";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchMentors();
  }

  render() {
    const { mentors } = this.props;
    return (
      <>
        <div className="sidebar">
          <div className="profile-img">
            <img
              className="mentee"
              style={{ width: "12rem", borderRadius: "8rem" }}
              src={MenteeImage}
              alt="mentee"
            />
            <Link to="#">
              <h5
                style={{
                  border: "1px solid",
                  fontSize: "1.1rem",
                  margin: "1rem auto",
                  cursor: "pointer",
                  backgroundColor: "#4F4F4F",
                  color: "#fff",
                  width: "10rem",
                }}
              >
                Edit profile
              </h5>
            </Link>
            <h5>Hi Henry</h5>
            <h6>Welcome to your Dashboard</h6>
          </div>
        </div>
        <div className="dash">
          <MentorsList mentors={mentors} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  mentors: state.mentors,
});
export default connect(mapStateToProps, { fetchMentors })(Dashboard);
