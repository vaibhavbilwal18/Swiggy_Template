
import react from "react";
import {useState} from "react";
class UserClass extends react.Component {

    constructor(props){
        super(props);
    }
 
   render () {
    const {name , location} = this.props;
    return (
        <div className = "user-card">
        <h2>Name: {name}</h2>
        <h3> Location: {location}</h3>
        <h4>Contact: @vaibhavbilwal</h4>
    </div>
    );
   };
};

export default UserClass;