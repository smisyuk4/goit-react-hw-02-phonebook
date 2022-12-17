import { Component } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: ''
}
export class App extends Component {
  state = {
    ...INITIAL_STATE,
    contacts: [{name: 'test-1',number: '5555-55', id: 1}, {name: 'test-2',number: '00000-00', id: 2}],
    name: '',
    number: ''
  }

  nameContact = (event) => {
    this.setState({name: event.target.value})
  }

  numberContact = (event) => {
    this.setState({number: event.target.value})
  }

  sendContact = (event) => {
    event.preventDefault()
    const form = event.currentTarget      
    const name = form.elements.name.value
    const number = form.elements.number.value
    const contactId = nanoid()
    const newContact = { name, number, id: contactId }

    this.setState(preState => {
      return { 
        contacts: [...preState.contacts, newContact]
      }
    })

    form.reset()
  }

  render() {
    console.log(this.state)
    return <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >      
      <Title title="Phonebook" children={<Form sendContact={this.sendContact} nameContact={this.nameContact} numberContact={this.numberContact} />} />      
      <Title title="Contacts" children={<ListContacts arrayContacts={this.state.contacts} />}/>
    </div>
  }
}

const Title = ({title, children}) => {
  return <div>
    <h2>{title}</h2>
    {children}
  </div>
}

const Form = ({sendContact, nameContact, numberContact}) => {
  return <form onSubmit={sendContact}>
            <label>
              Name:
              <input
                onChange={nameContact}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              Number:
              <input
                onChange={numberContact}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
}

const ListContacts = ({arrayContacts}) => {
  return <ul>
    {arrayContacts.map(item => <Contact contact={item} key={item.id} />)}
        </ul>
}

const Contact = ({ contact }) => {
  const {name, number} = contact
  return <li>
          {name} : {number}
        </li>
}