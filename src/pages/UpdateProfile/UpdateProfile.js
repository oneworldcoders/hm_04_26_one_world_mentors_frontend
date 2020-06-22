import React, { Component } from "react";
import { fetchMentors } from "../../redux/actions/fetchMentorsAction";
import { connect } from "react-redux";
import "./UpdateProfile.css";
import ProfileForm from "../../components/Profile/Profile";
import SideBar from "../../components/SideBar/SideBar";

class UpdateProfile extends Component {
  componentDidMount() {
    this.props.fetchMentors();
  }

  render() {
    const { mentors } = this.props;
    return (
      <>
        <div className="sidebar">
          <SideBar/>
        </div>
        <div className="dash">
          <ProfileForm/>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  mentors: state.mentors,
});
export default connect(mapStateToProps, { fetchMentors })(UpdateProfile);
