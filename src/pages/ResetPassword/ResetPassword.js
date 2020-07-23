import React, { useState } from "react";
import "./ResetPassword.css";
import { useDispatch } from "react-redux";
import { reset_password } from "../../redux/actions/resetPasswordAction";

function ResetPassword(props) {
  const [email, setEmail] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // const resetPasswordStatus = useSelector(state => state.resetPasswordReducer.resetPasswordStatus);
  const dispatch = useDispatch();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let reset_password_detail = {
      email,
      token: verificationCode,
      password,
      confirmPassword
    };

    dispatch(reset_password(reset_password_detail))
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
                  Code
                </label>
                <div className="col-sm-9">
                  <input
                    id="verificationCodeInput"
                    type="text"
                    required
                    className="form-control form-control-lg"
                    placeholder="Enter verification code"
                    name="verificationCode"
                    onChange={onVerificationCodeChange}
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
                <label
                  htmlFor="colFormLabelLg"
                  className="col-sm-3 col-form-label col-form-label-lg"
                >
                  Confirm
                </label>
                <div className="col-sm-9">
                  <input
                    id="confirmPasswordInput"
                    type="password"
                    required
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={onConfirmPasswordChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-warning btn-lg">
                    RESET PASSWORD
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

export default ResetPassword;
