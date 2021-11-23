import { useSelector } from 'react-redux';
import Container from '../Components/Container/Container';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';

export default function PhonebookPage() {
  const { loading } = useSelector(state => state.phonebook);

  return (
    <Container>
      <h1>Phonebook</h1>
      {loading && <h1>Loading...</h1>}
      <ContactForm />
      <h2>Contacts </h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
