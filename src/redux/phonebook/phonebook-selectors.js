import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;

export const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
});
