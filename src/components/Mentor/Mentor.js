import React from "react";
import MentorImage from '../../assets/mentor.png'

const Mentor = (props) => {

  return (
    <div className="right-frame-upper">
      <div className="notification">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </div>
      <div className="profile-image">
        <img className="img-circle" src={ props.image_url } />
      </div>
      <div className="full-name ">{ props.first_name + ' ' + props.last_name}</div>
      <div className="elem-gap">
        <span className="role">Mentor</span>
      </div>
      <div className="elem-gap">
        <span className="company">Mentor at One World Coders</span>
      </div>
    </div>
  );

};
Mentor.defaultProps = {
  first_name: 'No assigned mentor yet',
  last_name: '',
  image_url: MentorImage
};

export default Mentor;
