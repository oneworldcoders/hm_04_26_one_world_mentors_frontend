import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

const EnrolledCourse = (props) => {
  return (
    <div className="right-frame-lower">
          <div style={{marginLeft:'4rem'}}>
            <span className="stack">
              Enrolled for {props.name}
            </span>
          </div>
          <div className="gap">
            <ProgressBar className='mt-3' animated now={props.progress} label={`progress ${props.progress}%`} />
          </div>
        </div>
  );

};
EnrolledCourse.defaultProps = {
  name: 'None yet',
  progress: 0,
};

export default EnrolledCourse;
