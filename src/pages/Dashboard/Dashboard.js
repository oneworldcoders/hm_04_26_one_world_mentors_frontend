import React, { Component } from "react";
import { fetchMentors } from "../../redux/actions/fetchMentorsAction";
import { connect } from "react-redux";
import "./Dashboard.css";
import RightFrame from "../Dashboard/rightFrame/RightFrame";
import SideBar from "../../components/SideBar/SideBar";

class Dashboard extends Component {
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
          <RightFrame/>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  mentors: state.mentors,
});
export default connect(mapStateToProps, { fetchMentors })(Dashboard);
