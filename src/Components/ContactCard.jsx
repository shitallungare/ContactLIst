import React from "react";
import { Link } from "react-router-dom";
import ung from "../Images/ung.jpg";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    
    return (
        <div className="item">
            <img className="ui avatar image" src={ung} alt="user avatar" />
            <div className="content">
                 <Link to = {{pathname: '/contact/${id}',state:{contact: props.contact}}}>
                <div className="header">{name}</div>
                <div>{email}</div>
                </Link>
            </div>
            <i 
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
                onClick={() => props.clickHander(id)} // Make sure this matches the parent
            ></i>
            <Link to = {{pathname: '/edit',state:{contact: props.contact}}}>
            
            <i 
                className="edit alternate outline icon"
                style={{ color: "blue", marginTop: "7px" }}
                 // Make sure this matches the parent
            ></i>
            </Link>
        </div>
    );
};

export default ContactCard;
 // This now matches the function name
