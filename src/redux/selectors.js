import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.filter;
export const getContacts = state => state.contacts.items;
export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
