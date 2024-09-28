import React from "react";
import ung from "../Images/ung.jpg";

const ContactCard = (props) => { // Changed from CardContact to ContactCard to match the export statement
    const {id, name, email} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={ung} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i 
            className="trash alternate outline icon"
            style={{color:"red", marginTop:"7px"}}
            ></i>
        </div>
    );
};

export default ContactCard; // This now matches the function name
