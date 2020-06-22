import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import {
  fetchSingleUserProfile,
  updateUserProfile,
  updateUserProfileImage,
} from "../../redux/actions/userProfileAction";
import { decodedUserId } from "../../helpers/decoder";

class ProfileForm extends Component {
  state = {
    image_url: "",
    first_name: "",
    last_name: "",
    email: "",
    user_type: "",
  };
  componentDidMount() {
    const LoggedUserId = decodedUserId();
    this.props.fetchSingleUserProfile(LoggedUserId);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state, 'this.state')
  };

  onImageChange = (event) => {
    // console.log('helooooooooooooooo-1')
    this.setState({ ...this.state, [event.target.name]: event.target });
    // const { image_url } = this.state;
    // console.log(this.state, 'this.state')
    // if(!this.state.image_url === " "){
    //   console.log('helooooooooooooooo-2')
    //   const { image_url } = this.state;
    //   // const imageUrl = image_url.split("\\")[2];
    // const LoggedUserId = decodedUserId();
    // this.props.updateUserProfileImage(LoggedUserId, image_url);
    // }
  };

  handleFile = e => {
    this.setState({ [e.target.name]: e.target.files[0].name });
    console.log(this.state, 'this.state')
  };

  onSubmitImage = async () => {
    const { image_url } = this.state;
    // const updatedImage = {
    //   image_url,
    // };
    var imageUrl = image_url.split("\\")[2];
    console.log(imageUrl.toString(), 'image')
    // const LoggedUserId = await decodedUserId();
    // this.props.updateUserProfileImage(LoggedUserId, imageUrl.toString);
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { first_name, last_name, email, user_type } = this.state;
    const updatedData = {
      first_name,
      last_name,
      email,
      user_type,
    };
    this.onSubmitImage();
    const LoggedUserId = await decodedUserId();
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
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabelLg"
                    className="col-sm-3 col-form-label col-form-label-lg"
                  >
                    Image
                  </label>
                  <div className="image col-sm-9">
                    <input
                      type="file"
                      onChange={this.handleFile}
                      className="form-control-file"
                      name="image_url"
                      // value={this.state.image_url}
                    />
                  </div>
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
                      className="form-control form-control-lg"
                      name="user_type"
                      placeholder="Role"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <button
                      href="#"
                      type="submit"
                      className="btn btn-warning btn-lg"
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
  userImage: state.updateUserProfile

});
export default connect(mapStateToProps, {
  fetchSingleUserProfile,
  updateUserProfile,
  updateUserProfileImage,
})(ProfileForm);
