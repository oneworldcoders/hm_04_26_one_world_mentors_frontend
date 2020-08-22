import React, { useEffect } from "react";
import "./rightFrame.css";
import "../../../components/Mentors/MentorsList.css";
import Mentor from "../../../components/Mentor/Mentor";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenteeRecord } from "../../../redux/actions/fetchMenteeRecord";
import { decodedUserId } from "../../../helpers/decoder";
import EnrolledCourse from "../../../components/EnrolledCourse/EnrolledCourse";
import { fetchMenteeSubtracks } from "../../../redux/actions/fetchMenteeSubtracksAction";

const RightFrame = () => {

  const dispatch = useDispatch();
  const mentors = useSelector(state => state.mentors.mentors);
  const assignedMentor = useSelector(state => state.fetchMenteeRecord.menteeRecord.mentor)
  const enrolledCourse = useSelector(state => state.fetchMenteeRecord.menteeRecord.course)
  const progress = useSelector(state => state.fetchMenteeSubtracks.progress)

  const enrolledCourseProps = {
    ...enrolledCourse,
    progress,
  }

  let mentorRecord;
  if(assignedMentor){
    mentorRecord = mentors.find(mentor => mentor.id = assignedMentor.id)
  }

  const userId = decodedUserId();
  useEffect(() => {
    dispatch(fetchMenteeRecord(userId));
    dispatch(fetchMenteeSubtracks());
  }, [dispatch]);

  return (
    <>
      <div className="right-frame-wrapper">
        <Mentor {...mentorRecord}/>
        <EnrolledCourse {...enrolledCourseProps}/>
        
      </div>
    </>
  );
}
export default RightFrame;