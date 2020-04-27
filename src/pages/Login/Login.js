import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/loginAction";
import "./Login.css";

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
    <>
      <div className="login_left">
        <div className="login_tagline">
          <div className="col-md-12 align-self-center">
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label
                  htmlFor="colFormLabelLg"
                  className="col-sm-3 col-form-label col-form-label-lg"
                >
                  Email
                </label>
                <div className="col-sm-9">
                  <input
                    id="loginEmailInput"
                    type="text"
                    required
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                    name="email"
                    onChange={onEmailChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="colFormLabelLg"
                  className="col-sm-3 col-form-label col-form-label-lg"
                >
                  Password
                </label>
                <div className="col-sm-9">
                  <input
                    id="loginPasswordInput"
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    onChange={onPasswordChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-warning btn-lg">
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="login_right"></div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.existingUser,
});
export default connect(mapStateToProps, { loginUser })(Login);
