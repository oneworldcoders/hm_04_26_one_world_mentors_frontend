import React, { useState } from "react";
import "../login.css";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/loginAction";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let login_detail = {
      email,
      password,
    };
    props.loginUser(login_detail);
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <form
          style={{ width: "60%", margin: "20rem auto" }}
          className="center-vertical"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label className="label">Email address</label>
            <input
              id="loginEmailInput"
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={onEmailChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input
              id="loginPasswordInput"
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={onPasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            LOGIN
          </button>
        </form>
      </div>
      <div className="right">
        <img
          src="https://res.cloudinary.com/opix/image/upload/v1587842002/mentor%20app/jjjjulllls.jpg"
          width="100%"
          height="100%"
          alt="Juls"
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.existingUser,
});
export default connect(mapStateToProps, { loginUser })(Login);
