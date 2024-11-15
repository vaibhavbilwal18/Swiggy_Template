import react from "react";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";






class About extends Component{
    constructor(props){
        super(props);
    }
    render() {

        return (
            <div>
                <div>
                    LoggedIn User : <UserContext.Consumer>
                        {(data) => console.log(data)}
                    </UserContext.Consumer>
                </div>
                <h1>About</h1>
                 <UserClass name = {"Vaibhav Bilwal "} location = {"Aurangabad"}/>
            </div>
        ); 
    }
};
export default About;