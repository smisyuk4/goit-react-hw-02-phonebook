import { Component } from 'react';
import { Form } from 'components/Form';
import { ListContacts } from 'components/ListContacts';
import { Title } from 'components/Title';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitContact = (newContact) => {
    this.setState(({ contacts }) => {
      return {
      contacts: [...contacts, newContact]
    }})
  }

  filterContact = event => {
    this.setState({ filter: event.target.value });
  };

  showContacts = () => {
    const fullBaseContacts = this.state.contacts;
    const findName = this.state.filter.toLowerCase();

    return fullBaseContacts.filter(({ name }) =>
      name.toLowerCase().includes(findName)
    );
  };

  render() {
    const visibleContacts = this.showContacts();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>My favorite</h1>
        <Title
          title="Phonebook"
          children={
            <Form
              onSubmit={this.submitContact}
              contactsBase={this.state.contacts}
            />
          }
        />
        <Title
          title="Contacts"
          children={
            <ListContacts
              arrayContacts={visibleContacts}
              filterContact={this.filterContact}
              filter={this.state.filter}
            />
          }
        />
      </div>
    );
  }
}
