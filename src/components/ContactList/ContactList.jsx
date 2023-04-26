import { useDispatch, useSelector } from 'react-redux';
import { Button, Li } from './ContactList.styled';
import { deleteContacts } from 'store/API/deleteContacts';
import { useEffect } from 'react';
import { fetchContacts } from 'store/API/getContacts';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  const normalizedName = filter.toLowerCase();
  const contactsAll = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedName)
  );

  return contactsAll.map(contact => {
    return (
      <Li key={contact.id} id={contact.id}>
        {contact.name}: {contact.number}
        <Button
          data-id={contact.id}
          onClick={() => dispatch(deleteContacts(contact.id))}
        >
          Delete
        </Button>
      </Li>
    );
  });
}
