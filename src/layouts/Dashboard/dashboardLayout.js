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

  const handleLogout = () =>{
    localStorage.clear('jwtToken')
  }
  const email = decodedUserEmail()
  if (email) {
    return (
      <div className="welcome">
        <div className="menu">
          <a style={{color: 'white'}}  href="/"><div className="logo">Mentors</div></a>
          <div style={{marginLeft: 'auto', fontWeight: 'bold'}} className="action"> <span style={{ color:'#f2c94c', fontWeight: 'bold'}}>{email}</span></div>
          <a onClick={handleLogout} style={{marginRight: '5rem'}} className="link" href="/">
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
      <a style={{color: 'white'}} href="/"><div className="logo">Mentors</div></a><br/>
        <div style={{marginLeft: 'auto'}} className="action">Become a Mentor</div>
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
