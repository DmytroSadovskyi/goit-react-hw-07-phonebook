import { FaTrashAlt } from 'react-icons/fa';
import { ContactItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {contacts?.map(({ name, phone, id }) => {
        return (
          <ContactItem key={id}>
            <span
              style={{
                flexGrow: '2',
              }}
            >
              {name}
            </span>
            <span
              style={{
                marginRight: '10px',
              }}
            >
              {phone}
            </span>

            <FaTrashAlt
              aria-label="delete-icon"
              style={{
                cursor: 'pointer',
                color: 'crimson',
              }}
              onClick={() => {
                handleDelete(id);
              }}
            />
          </ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactsList;
