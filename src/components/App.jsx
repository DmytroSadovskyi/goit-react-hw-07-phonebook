import React from 'react';
import Container from './Container';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { MainTitle, SecondTitle } from './Container/Container.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactsList />
    </Container>
  );
};
