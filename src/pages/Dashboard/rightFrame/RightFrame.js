import React, { useEffect } from "react";
import "./rightFrame.css";
import "../../../components/Mentors/MentorsList.css";
import Mentor from "../../../components/Mentor/Mentor";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenteeRecord } from "../../../redux/actions/fetchMenteeRecord";
import { decodedUserId } from "../../../helpers/decoder";
import EnrolledCourse from "../../../components/EnrolledCourse/EnrolledCourse";

const RightFrame = () => {

  const dispatch = useDispatch();
  const mentors = useSelector(state => state.mentors.mentors);
  const assignedMentor = useSelector(state => state.fetchMenteeRecord.menteeRecord.mentor)
  const enrolledCourse = useSelector(state => state.fetchMenteeRecord.menteeRecord.course)

  let mentorRecord;
  if(assignedMentor){
    mentorRecord = mentors.find(mentor => mentor.id = assignedMentor.id)
  }

  const userId = decodedUserId();
  useEffect(() => {
    dispatch(fetchMenteeRecord(userId));
  }, [dispatch]);

  return (
    <>
      <div className="right-frame-wrapper">
        <Mentor {...mentorRecord}/>
        <EnrolledCourse {...enrolledCourse}/>
        
      </div>
    </>
  );
}
export default RightFrame;