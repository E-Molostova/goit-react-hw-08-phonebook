import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import { addContact } from '../../redux/phonebook/phonebook-operations';

import style from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const isContactExist = newContact => {
    contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase() ||
        contacts.some(contact => contact.number === newContact.number),
    )
      ? alert(`Friend ${newContact.name} or number ${newContact.number} is alredy exist`)
      : dispatch(addContact(newContact));
  };

  const handleSubmit = e => {
    e.preventDefault();
    isContactExist({ name, number });
    reset();
  };

  return (
    <form className={style.formContact} onSubmit={handleSubmit}>
      <label className={style.inputLabel}>
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={style.contactInput}
        />
      </label>
      <label className={style.inputLabel}>
        Number
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={style.contactInput}
        />
      </label>
      <button className={style.buttonInput} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
