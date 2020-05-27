import React, { Component } from "react";
import { fetchMentors } from "../../redux/actions/fetchMentorsAction";
import { connect } from "react-redux";
import "./Dashboard.css";
import MentorsList from "../../components/Mentors/MentorsList";
import SideBar from "../../components/SideBar/SideBar";
import auth0Client from "../../socialAuth";

class Dashboard extends Component {
   componentDidMount() {
    auth0Client.socialAuthHandler().then(()=>{
      this.props.fetchMentors()
    })
  }

  render() {
    const { mentors } = this.props;
    return (
      <>
        <div className="sidebar">
          <SideBar/>
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
