import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import api from '../api/contacts';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact"; // Ensure the file name is correct
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import contact from "../api/contact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [serchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState ([]);

     // RetriveContacts
     const retrieveContacts = async () => {
      const response =  await api.get("/contacts");
      return response.data;
     }


  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact
    };
    
    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };
   
  const updateContactHandler = async (contact) => {
    const response = await api.put('/contacts/${contact.id}', contact);
    const {id, name, email} = response.data;
    setContacts(contacts.map(contact => {
     return contact.id === id ? {...response.data} : contact;
    }));
  };


  const removeContactHandler = async (id) => {
    await api.delete('/contacts/${id}');
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
 const searchHandler  = (serchTerm) => {
setSearchTerm(serchTerm);
if(serchTerm !== "") {
  const newContactList = contact.filter((contact) => {
    return Object.values(contact).join("").toLowerCase().includes(serchTerm.toLowerCase());
});
setSearchResults(newContactList);
}else{
  setSearchResults(contacts);
}
 }


  useEffect(() => {
     const getAllcontacts = async () => {
       const allContacts = await retrieveContacts();
       if(allContacts) setContacts(allContacts);
     };
     getAllcontacts();
    //const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <ContactList 
                contacts={serchTerm.length <1 ? contacts : searchResults} 
                getContactId={removeContactHandler} 
                term={serchTerm}
                searchKeyword = {searchHandler}
              />
            }
          />
          
          {/* Add Contact Route */}
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />

<Route
            path="/edit"
            element={<EditContact updateContactHandler={updateContactHandler} />}
          />
          
          {/* Contact Detail Route with dynamic id */}
          <Route 
            path="/contact/:id" 
            element={<ContactDetail />}
          />
        </Routes>
      </Router>
    </div>
  );
  }
  export default App;
  