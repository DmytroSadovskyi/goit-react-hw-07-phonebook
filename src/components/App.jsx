import React from 'react';
import Container from './Container';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { MainTitle, SecondTitle } from './Container/Container.styled';

export const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactsList />
    </Container>
  );
};
