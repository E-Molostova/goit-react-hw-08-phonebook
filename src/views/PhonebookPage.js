import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../Components/ContactForm/ContactForm';
import ContactList from '../Components/ContactList/ContactList';
import Container from '../Components/Container/Container';
import Filter from '../Components/Filter/Filter';

// import { todosOperations, todosSelectors } from '../redux/todos';

export default function PhonebookPage(params) {
  const dispatch = useDispatch();
  //   const isLoadingTodos = useSelector(todosSelectors.getLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  //   useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);
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
