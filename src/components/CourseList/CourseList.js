import React, { useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./CourseList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../redux/actions/fetchAllCourses";
import { fetchACourse } from "../../redux/actions/fetchACourse";
import { enrollCourse } from "../../redux/actions/enrollCourse";
import { Link } from "react-router-dom";

const CourseSubtrack = () => {
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();
  const courses = useSelector((state) => state.fetchCourses.courses);
  const courseSubtracks = useSelector(
    (state) => state.fetchACourse.course.subtracks
  );

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const fetchSubtracks = (courseId) => {
    dispatch(fetchACourse(courseId));
  };

  const onCheck = () => {
    console.log(completed, "completed");
  };
  return (
    <div className="course-list-wrapper ">
      <Link className="acc-wrapper" to="courseForm">
        <Button className="accordion-button" variant="primary">
          Add Course
        </Button>
      </Link>
      <Accordion className="accordion">
        {courses &&
          courses.map((course) => (
            <Card
              className="acc-card"
              key={course.id}
              onClick={() => fetchSubtracks(course.id)}
            >
              <Accordion.Toggle
                className="acc-header"
                as={Button}
                variant="link"
                eventKey={course.id}
              >
                <Card.Header>{course.name}</Card.Header>
              </Accordion.Toggle>
              <Accordion.Collapse className="acc-collapse" eventKey={course.id}>
                <Card.Body>
                  <div>
                    <div style={{ marginBottom: "18px" }}>
                      {" "}
                      {course.description}
                    </div>
                    {courseSubtracks &&
                      courseSubtracks.map((subtrack) => (
                        <div key={subtrack.id} className="subtrack">
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
                        </div>
                      ))}
                    <Link
                      to={`/subtrack/${course.id}`}
                      className="btn btn-success btn-lg float-right mb-2"
                      href="#"
                      role="button"
                      onClick={() =>
                        dispatch(enrollCourse({ course_id: course.id }))
                      }
                    >
                      Enroll Course
                    </Link>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
      </Accordion>
    </div>
  );
};

export default CourseSubtrack;
