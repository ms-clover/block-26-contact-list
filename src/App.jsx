import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList';
import SelectedContact from './components/selectedContact';

export default function App() {
  const [selectedcContactId, setSelectedContactId] = useState(null)

  return (
    <div className="container">
      {selectedcContactId ?(<SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactID}/>) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )};
    </div>
  )
};
