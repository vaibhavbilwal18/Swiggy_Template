import react from "react";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>About</h1>
                 <UserClass name = {"Vaibhav Bilwal(classes)"} location = {"Aurangabad"}/>
            </div>
        ); 
    }
};
export default About;