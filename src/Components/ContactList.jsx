import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    
    
     const inputEl = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
      
    
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
                key={contact.id} // Assuming each contact has a unique 'id'
                contact={contact} 
                clickHander={deleteContactHandler} 
                
            />
        );
    });
    const getSearchTerm = () => {
        props.searchkeyword(inputEl.current.value);
    };

    return (
        <div class ="main">
            <h2>Contact List
            <Link to = "/add">
            <button className="ui button blue right">Add contact</button>
            </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                    ref={inputEl}
                    type = "text" placeholder="Serach Contacts" className="propmt" value={props.term} onChange={getSearchTerm}/>
                    <i className="Search icon">

                    </i>
                </div>
            </div>
            
        <div className="ui celled list">
            {renderContactList.length>0 ? renderContactList: "No Contacts Available" }
        </div>
        </div>
    );
};

export default ContactList;
