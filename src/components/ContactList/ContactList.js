import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/phonebookSlice';
import { ContactItem } from 'components/ContactItem/ContactItem';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneBook.items);
  const filter = useSelector(state => state.phoneBook.filter);
  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};
