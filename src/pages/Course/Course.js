import React from "react";
import CourseList from "../../components/CourseList/CourseList";
import SideBar from "../../components/SideBar/SideBar";

const Course = () => {

  return (
    <>
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="dash">
        <CourseList />
      </div>

    </>
  );
};

export default Course;