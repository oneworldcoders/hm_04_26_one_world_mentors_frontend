import React, { Component } from "react";
import { fetchMentors } from "../../redux/actions/fetchMentorsAction";
import { updateUserProfileImage } from "../../redux/actions/userProfileAction";
import { connect } from "react-redux";
import "./UpdateProfile.css";
import ProfileForm from "../../components/Profile/Profile";
import SideBar from "../../components/SideBar/SideBar";
import BounceLoader from "react-spinners/BounceLoader";

class UpdateProfile extends Component {
  componentDidMount() {
    this.props.fetchMentors();
  }

  render() {
    const {
      userImage: { loading },
    } = this.props;
    if (loading) {
      return (
        <div className="sweet-loading1">
          <BounceLoader size={150} color={"#000000"} />
        </div>
      );
    }
    return (
      <>
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="dash">
          <ProfileForm />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  mentors: state.mentors,
  userImage: state.updateUserImage,
});
export default connect(mapStateToProps, {
  fetchMentors,
  updateUserProfileImage,
})(UpdateProfile);
