import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/App/App.styled';
import { ContactsWrapper } from 'components/App/App.styled';

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactsWrapper>
        <Filter />
        <ContactList />
      </ContactsWrapper>
    </Container>
  );
}