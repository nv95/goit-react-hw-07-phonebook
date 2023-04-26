import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts && contacts.contacts && contacts.contacts.length === 0 ? (
        <p>There are no contacts in the phonebook yet.</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
