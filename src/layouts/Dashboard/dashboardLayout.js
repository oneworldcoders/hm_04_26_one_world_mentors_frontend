import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSingleUserProfile } from "../../redux/actions/userProfileAction";
import { decodedUserEmail } from "../../helpers/decoder";
import "./dashboardLayout.css";

function DashboardLayout({ children }) {
  useEffect(() => {
    const LoggedUserEmail = decodedUserEmail();
    console.log(LoggedUserEmail, "LoggedUserEmail");
  }, []);

  const email = decodedUserEmail()
  if (email) {
    return (
      <div className="welcome">
        <div className="menu">
          <div className="logo">Mentors</div>
          <div className="action">Hello  <span style={{color:'#32b643', fontWeight: 'bold'}}>{email}</span></div>
          <a style={{marginRight: '5rem'}} className="link" href="/about">
            Logout
          </a>
        </div>
        <div className="choko">{children}</div>
      </div>
    );
  }
  return (
    <div className="welcome">
      <div className="menu">
        <div className="logo">Mentors</div>
        <div className="action">Become a Mentor</div>
        <a className="link" href="/register">
          Register
        </a>
        <a className="link" href="/login">
          Login
        </a>
        <a className="link" href="/about">
          About
        </a>
      </div>
      <div className="choko">{children}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
});
export default connect(mapStateToProps, { fetchSingleUserProfile })(
  DashboardLayout
);
