import React, { Component } from "react";
import MenteeImage from "../../assets/henry.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {fetchSingleUserProfile} from '../../redux/actions/userProfileAction';
import {decodedUserId} from '../../helpers/decoder'
import "./SideBar.css";

class SideBar extends Component {
  componentDidMount(){
    const LoggedUserId = decodedUserId()
    this.props.fetchSingleUserProfile(LoggedUserId)
  }
  render() {
    
    const {userProfile:{user:{data}}} = this.props
    const image = data && data.image_url
    return (
      <div className="sidebar">
        <div className="profile-img">
          <img
            className="mentee"
            style={{ width: "12rem", borderRadius: "8rem" }}
            src={image ? image : MenteeImage}
            alt="mentee"
          />
          <Link className="l-hover" to="#">
            <h5 className="profile-links">
              Edit profile
            </h5>
          </Link>
        </div>
        <div className="sidebar-links">
          <Link className="l-hover" to="#">
              <h5 className="sidelinks">DashBaord</h5>
          </Link>
          <Link className="l-hover" to="#">
          <h5 className="sidelinks">Course Tracks</h5>
          </Link>
          <Link className="l-hover" to="#">
          <h5 className="sidelinks">Search Mentees</h5>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
});
export default connect(mapStateToProps, { fetchSingleUserProfile })(SideBar);
