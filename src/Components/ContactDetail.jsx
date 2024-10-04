import React from "react";
import { Link, useLocation } from "react-router-dom";
import ung from "../Images/ung.jpg";

const ContactDetail = (props) => {
    const location = useLocation();
    const { name, email } = props.location.state.contact;
    return (

        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={ung} alt="user" />
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="description">{email} </div>



                </div>
            </div>
            <div className="center-div">
              <link to = "/">
              <button className="ui button blue center">Back to Contact LIst</button> </link>
        </div>
        

        </div>
        
    );
};

export default ContactDetail;