import React from "react";
import PropTypes, { object, string } from "prop-types";

const Mentor = ({ first_name, last_name }) => {
    return(
        <React.Fragment>
        <h> Mentors </h>
        <p>{first_name}</p>
        <p>{last_name}</p>
        </React.Fragment>
    )
}

Mentor.PropTypes = {
    first_name: Proptypes.string.isRequired,
    last_name: Proptypes.string.isRequired
}

export default Mentor;
