import React from "react";
import CourseSubtrack from "../../components/CourseList/CourseSubtrack";
import SideBar from "../../components/SideBar/SideBar";

const Subtrack = () => {

  return (
    <>
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="dash">
        <CourseSubtrack />
      </div>

    </>
  );
};

export default Subtrack;