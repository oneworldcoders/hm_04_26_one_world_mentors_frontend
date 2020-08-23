import React, { useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./CourseList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../redux/actions/fetchAllCourses";
import { fetchACourse } from "../../redux/actions/fetchACourse";
import { enrollCourse } from "../../redux/actions/enrollCourse";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const CourseList = ({ props }) => {
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();
  const course = useSelector((state) => state.fetchACourse.course);
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchACourse(id));
  }, []);

  // const fetchSubtracks = (courseId) => {
  //   dispatch(fetchACourse(courseId));
  // };

  const onCheck = () => {
    console.log(completed, "completed");
  };
  return (
    <div className="course-list-wrapper ">
      <Link to='/courses' className="acc-wrapper" >
        <Button className="accordion-button" variant="primary">
          back
        </Button>
      </Link>
      <div className="accordion">
        <Card className="acc-card">
          <div className="acc-header">
            <Card.Header>{course.course && course.course.name}</Card.Header>
          </div>
          <Card.Body>
            <div>
              <div style={{ marginBottom: "18px" }}>
                {" "}
                {course.course && course.course.description}
              </div>
              {course.subtracks &&
                course.subtracks.map((subtrack) => (
                  <div key={subtrack.id} className="subtrack2">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#444",
                        width: "90%",
                      }}
                    >
                      <div style={{ padding: "5px", marginRight: "8px" }}>
                        {subtrack.name}.
                      </div>
                      <div>{subtrack.description}</div>
                    </div>

                    <input
                      style={{ marginRight: "8px" }}
                      type="checkbox"
                      name="completed"
                      onChange={onCheck}
                    />
                  </div>
                ))}
              <button
                className="btn btn-success btn-lg float-right mb-2"
                href="#"
                role="button"
                disabled={true}
                // onClick={() =>
                //   dispatch(enrollCourse({ course_id: course.id }))
                // }
              >
                Claim certificate
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CourseList;
