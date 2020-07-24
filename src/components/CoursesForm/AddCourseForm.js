import React, { Component } from "react";
import "./CourseForm.css";
import { connect } from "react-redux";
import { addCourse } from "../../redux/actions/addCourse";

class CourseForm extends Component {
  state = {
    name: "",
    courseCode: "",
    description: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { name, courseCode, description } = this.state;
    const courseData = {
      name,
      courseCode,
      description,
    };
    this.props.addCourse(courseData);
  };

  render() {
    return (
      <>
        <div className="courseForm-form-wrapper">
          <div className="update">Add Course</div>
          <br />
          <div className="register_tagline">
            <div className="col-md-12 align-self-center">
              <form onSubmit={this.onSubmit}>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabelLg"
                    className="col-sm-3 col-form-label col-form-label-lg"
                  >
                    Course Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      onChange={this.onChange}
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Course name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabelLg"
                    className="col-sm-3 col-form-label col-form-label-lg"
                  >
                    Course code
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      onChange={this.onChange}
                      name="courseCode"
                      className="form-control form-control-lg"
                      placeholder="Course code"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="colFormLabelLg"
                    className="col-sm-3 col-form-label col-form-label-lg"
                  >
                    Description
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      onChange={this.onChange}
                      name="description"
                      className="form-control form-control-lg"
                      placeholder="Course details"
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
  course: state.addCourse,
});
export default connect(mapStateToProps, {
  addCourse,
})(CourseForm);
