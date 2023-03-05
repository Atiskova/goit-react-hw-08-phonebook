import { Container } from 'components/App.Stuled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectStatus } from 'redux/users/selectors';
import { Background } from 'pages/Background.styled';
import { Wrapper, ContactsList } from './Contacts.stylsed';

function ContactsPage() {
    const contacts = useSelector(selectContacts);
    const status = useSelector(selectStatus);

  return (
    <>
    <Background>
    <Wrapper>
      <Container>
        <Section title="Adding contacts">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <ContactsList>
            {contacts.length !== 0 && <Filter />}
            <ContactList />
            {contacts.length === 0 && <p style={{fontSize: 24, fontWeight: 500}}>There are no contacts yet.</p>}
          </ContactsList>
        </Section>
        {contacts.length === 0 && status === 'pending' && <Loader />}
      </Container>
    </Wrapper>
    </Background>
    </>
  );
};

export default WithAuthRedirect(ContactsPage, '/sign-in');