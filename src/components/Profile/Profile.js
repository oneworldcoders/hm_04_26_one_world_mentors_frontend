import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import {
  fetchSingleUserProfile,
  updateUserProfile,
  updateUserProfileImage,
} from "../../redux/actions/userProfileAction";
import ImageUploader from "react-images-upload";
import BounceLoader from "react-spinners/BounceLoader";
import { decodedUserId } from "../../helpers/decoder";

class ProfileForm extends Component {
  state = {
    image_url: [],
    first_name: "",
    last_name: "",
  };
  componentDidMount() {
    const LoggedUserId = decodedUserId();
    console.log(LoggedUserId, "LoggedUserId");
    this.props.fetchSingleUserProfile(LoggedUserId);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onDrop = async (picture) => {
    const LoggedUserId = decodedUserId();
    const formData = new FormData();
    formData.append("image_url", picture[0]);
    await this.props.updateUserProfileImage(LoggedUserId, formData);
    
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { first_name, last_name } = this.state;
    const updatedData = {
      first_name,
      last_name,
    };
    const LoggedUserId = decodedUserId();
    this.props.updateUserProfile(LoggedUserId, updatedData);
  };

  render() {
    const {
      user: {
        user: { data },
      },
    } = this.props;

    return (
      <>
        <div className="profile-form-wrapper">
          <div className="update">Update Your Profile</div>
          <br />
          <div className="register_tagline">
            <div className="col-md-12 align-self-center">
              <form onSubmit={this.onSubmit}>
                <div className="form-group passport row upload">
                  <ImageUploader
                    singleImage
                    name="image_url"
                    withIcon={false}
                    buttonText="Upload image"
                    className="upload"
                    onChange={this.onDrop}
                    imgExtension={[".jpeg", ".jpg", ".gif", ".png", ".svg"]}
                    maxFileSize={5242880}
                    withPreview
                    fileContainerStyle={{ width: "100% !important" }}
                  />
                </div>
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
                      onChange={this.onChange}
                      name="first_name"
                      className="form-control form-control-lg"
                      placeholder={data && data.first_name}
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
                      onChange={this.onChange}
                      name="last_name"
                      className="form-control form-control-lg"
                      placeholder={data && data.last_name}
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
                      onChange={this.onChange}
                      value={data && data.email}
                      readOnly={true}
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="Email"
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
                    <input
                      type="text"
                      onChange={this.onChange}
                      value={data && data.user_type}
                      readOnly={true}
                      className="form-control form-control-lg"
                      name="user_type"
                      placeholder="Role"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className=" submit-btn col-sm-12">
                    <button
                      href="#"
                      type="submit"
                      className="btn btn-warning btn-lg "
                    >
                      Submit
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
  user: state.userProfile,
  userProfile: state.updateUserProfile,
  userImage: state.updateUserImage,
});
export default connect(mapStateToProps, {
  fetchSingleUserProfile,
  updateUserProfile,
  updateUserProfileImage,
})(ProfileForm);
