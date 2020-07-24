import React from "react";
import CourseForm from "../../components/CoursesForm/AddCourseForm";
import SideBar from "../../components/SideBar/SideBar";

const CourseFormPage = () => {

  return (
    <>
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="dash">
        <CourseForm />
      </div>

    </>
  );
};

export default CourseFormPage;











