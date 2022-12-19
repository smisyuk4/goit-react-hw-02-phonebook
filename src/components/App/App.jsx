import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form } from 'components/Form';
import { ListContacts } from 'components/ListContacts';
import { Title } from 'components/Title';
import { Phonebook, MainTitle } from "./App.styled"

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Тарас Шевченко', number: '459-12-56' },
      {id: 'id-2', name: 'Іван Франко', number: '443-89-12'},
      {id: 'id-3', name: 'Леся Українка', number: '645-17-79'},
      { id: 'id-4', name: 'Григорій Сковорода', number: '227-88-33' },
      { id: 'id-5', name: 'Ліна Костенко', number: '4567-78-26' },
      { id: 'id-6', name: 'Валер’ян Підмогильний', number: '527272-91-00' },
      { id: 'id-7', name: 'Михайло Коцюбинський', number: '7778-99-55' },
    ],
    filter: '',
  };

  submitContact = (newContact) => {
    this.setState(({ contacts }) => {
      return {
      contacts: [...contacts, newContact]
    }})
  }

  filterContact = ({target}) => {
    this.setState({ filter: target.value });
  };

  showContacts = () => {
    const fullBaseContacts = this.state.contacts;
    const findName = this.state.filter.toLowerCase();

    return fullBaseContacts.filter(({ name }) =>
      name.toLowerCase().includes(findName)
    );
  };

  onClickBtnRemove = (idContact) => {
    this.setState(({contacts}) => {
      return {
        contacts: contacts.filter(item => item.id !== idContact)
      }
    })

    Notify.success(
    'The contact has been remove from storage',
    { position: 'center-top' })
  }

  render() {
    const visibleContacts = this.showContacts();

    return (
      <Phonebook>
        <MainTitle>My favorite</MainTitle>
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
              onClickBtnRemove={this.onClickBtnRemove}
            />
          }
        />
      </Phonebook>
    );
  }
}
