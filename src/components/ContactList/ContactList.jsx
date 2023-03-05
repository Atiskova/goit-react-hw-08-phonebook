import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Button, ListItem } from './ContactList.styled';
import { deleteContact, getContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectIsLoggedIn } from 'redux/users/selectors';


const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(getContacts());
  }, [isLoggedIn, dispatch]);

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul>
        {visibleContacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              {contact.name}:  {contact.number}
              <Button type="button" onClick={() => deleteContacts(contact.id)}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </ul>
      {contacts.length !== 0 && visibleContacts.length === 0 && (
        <p style={{fontSize: 24, color: '#da391d'}}>Contact wasn't found.</p>
      )}
    </>
  );
};

export default ContactList;
