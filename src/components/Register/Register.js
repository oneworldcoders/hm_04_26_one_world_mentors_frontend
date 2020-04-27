import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/registerAction";

import "./register.css";

export class Register extends Component {
  state = {
    form: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      user_type: "",
    },
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { form } = this.state;
    const user = { ...form };

    const { newUser } = this.props;

    newUser(user).then((status) => {
      if (status === 201) {
        window.location = "/login";
      } else {
        alert("Oops something went wrong");
        return false;
      }
    });
  };

  render() {
    return (
      <>
        <div className="register_left">
          <div className="register_tagline">
            <div className="col-md-12 align-self-center">
              <form onSubmit={this.submitHandler}>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabelLg"
                    className="col-sm-3 col-form-label col-form-label-lg"
                  >
                    Firstname
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      onChange={this.onInputChange}
                      required
                      name="first_name"
                      className="form-control form-control-lg"
                      id="first_name"
                      placeholder="Firstname"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabelLg"
                    className="col-sm-3 col-form-label col-form-label-lg"
                  >
                    Lastname
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      onChange={this.onInputChange}
                      required
                      name="last_name"
                      className="form-control form-control-lg"
                      id="last_name"
                      placeholder="Lastname"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabelLg"
                    className="col-sm-3 col-form-label col-form-label-lg"
                  >
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      required
                      onChange={this.onInputChange}
                      name="email"
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabelLg"
                    className="col-sm-3 col-form-label col-form-label-lg"
                  >
                    password
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      required
                      onChange={this.onInputChange}
                      name="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabelLg"
                    className="col-sm-3 col-form-label col-form-label-lg"
                  >
                    Role
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control form-control-lg"
                      name="user_type"
                      onChange={this.onInputChange}
                      required
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT">Choose...</option>
                      <option value="mentor">Mentor(Teacher)</option>
                      <option value="mentee">Mentee(Learner)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-12">
                    <button
                      href="#"
                      type="submit"
                      className="btn btn-warning btn-lg"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="register_right"></div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.registerReducer.isLoading,
  errors: state.registerReducer.errors,
  users: state.registerReducer,
});
export const mapDispatchToProps = (dispatch) => ({
  newUser: (data) => dispatch(registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
