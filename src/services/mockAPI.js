import axios from 'axios';

axios.defaults.baseURL = 'https://64689dd3e99f0ba0a828b93c.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data.id;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts/`, contact);
  return data;
}
