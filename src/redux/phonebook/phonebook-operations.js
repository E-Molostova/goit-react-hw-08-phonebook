import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact =
  ({ name, number }) =>
  async (dispatch, getState) => {
    const contact = { name, number };
    const contacts = getState().phonebook.contacts;
    if (
      contacts?.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contacts.some(contact => contact.number === number),
      )
    ) {
      return dispatch(
        addContactError(`Name${name} or number is already exist, check it out please`),
      );
    }

    dispatch(addContactRequest());

    try {
      const { data } = await axios.post('/contacts', contact);

      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };

export const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);

    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
