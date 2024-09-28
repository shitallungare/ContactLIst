import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import AddConatactList from "./AddConatactList";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <div className='ui container'>
      <Header />
      <AddConatactList />
      <ContactList contacts={contacts} />
    </div>
    
  );
}

export default App;
