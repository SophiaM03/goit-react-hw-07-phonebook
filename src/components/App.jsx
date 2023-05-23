import { ContactForm } from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import styled from 'styled-components';
import { Section } from './Section/Section';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <>
            <Filter />
          </>
        ) : (
          <p>No contacts</p>
        )}
        <ContactList />
      </Section>
    </Container>
  );
}
