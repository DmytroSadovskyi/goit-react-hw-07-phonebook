import { FaTrashAlt } from 'react-icons/fa';
import { ContactItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const visibleContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {visibleContacts?.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <span>{name}</span>
          <span>{number}</span>

          <FaTrashAlt
            style={{
              cursor: 'pointer',
              color: 'crimson',
            }}
            onClick={() => {
              handleDelete(id);
            }}
          />
        </ContactItem>
      ))}
    </ul>
  );
};

export default ContactsList;
