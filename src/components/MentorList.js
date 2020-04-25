import React from "react";
import Axios from "axios";
import Mentor from "./Mentor";

export default class MentorList extends React.Component{
    state = {
        mentors = []
    }

    componentDidMount() {
        Axios.get("/mentors")
            .then(response => {
                const mentors = response.data;
                this.setState({mentors})
            })
    }

    render(){
        return(
                <ul>
                    { this.state.mentors.map(mentor => {
                       <li> <Mentor first_name={mentor.first_name} last_name={mentor.last_name} /> </li>
                    })}
                </ul>
        )
    }
}