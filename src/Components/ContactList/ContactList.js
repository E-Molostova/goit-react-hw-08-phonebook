import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
import style from './ContactList.module.css';

const ContactList = () => {
  // const { contacts, filter } = useSelector(state => state);

  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteBtn = id => dispatch(deleteContact(id));

  // const filteredContacts = (contacts, filter) => {
  //   console.log(contacts);
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  // };

  // const filterContacts = filteredContacts(contacts, filter);

  return (
    <ul className={style.contactsList}>
      {filteredContacts.map(contact => (
        <li className={style.contactsItem} key={contact.id}>
          <p>{contact.name + ': ' + contact.number}</p>
          <button
            className={style.contactsDeleteBtn}
            id={contact.id}
            type="button"
            onClick={e => onDeleteBtn(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
