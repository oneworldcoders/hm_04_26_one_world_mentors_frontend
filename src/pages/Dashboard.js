import React, { Component } from "react";
import { fetchMentors } from "../redux/actions/fetchMentorsAction";
import { connect } from "react-redux";
import "./Dashboard.css";
import MentorImage from "../assets/dough.jpg"
import MenteeImage from "../assets/henry.jpg"

class Dashboard extends Component {
  componentDidMount() {
    // fetchMentors();
    // console.log(this.props, "props");
  fetch('https://owc-mentor-backend.herokuapp.com/mentors')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data, 'dataaaaaaa');
  });
  }
  render() {
    return (
      <>
      <div className="sidebar">
        <div className="profile-img">
        <img className="mentee" style={{width:'12rem', borderRadius:'.6rem'}} src={MenteeImage} alt="mentee" />
        <a href="#"><h5 style={{border:"1px solid", fontSize: '1.1rem', margin: '1rem auto', cursor:'pointer', backgroundColor: "rgba(241, 219, 152, 0.69)", color: "black", width:"10rem"}}>Edit profile</h5></a>
        <h5>Hi Henry</h5>
          <h6>Welcome to your Dashboard</h6>
        </div>
      </div>
       <div className="dash">
         <div className="dash-inner">
         <img style={{width:'12rem'}} src={MentorImage} alt="mentor" />
           <h3 className="mentors-list">FirstName: List of Mentors</h3>
           <h3 className="mentors-list">FirstName: List of Mentors</h3>
           <h3 className="mentors-list">Email: List of Mentors</h3>
           <h3 className="mentors-list">Role: List of Mentors</h3>
         </div>
       </div>
       </>
    );
  }
}

const mapStateToProps = (state) => ({
  mentors: state.mentors,
});
export default connect(mapStateToProps, { fetchMentors })(Dashboard);
