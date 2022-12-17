import { Component } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
  filter: ''
}
export class App extends Component {
  state = {
    ...INITIAL_STATE,
    contacts: [{name: 'test-1',number: '5555-55', id: 1}, {name: 'test-2',number: '00000-00', id: 2}],
    name: '',
    number: '',
    filter: ''
  }

  nameContact = (event) => {
    this.setState({name: event.target.value})
  }

  numberContact = (event) => {
    this.setState({number: event.target.value})
  }

  filterContact = (event) => {
    this.setState({filter: event.target.value})
  }

  sendContact = (event) => {
    event.preventDefault()
    const form = event.currentTarget      
    const name = form.elements.name.value
    const number = form.elements.number.value
    const contactId = nanoid()
    const newContact = { name, number, id: contactId }

    this.setState(({contacts}) => {
      return { 
        contacts: [...contacts, newContact]
      }
    })

    form.reset()
  }

  showContacts = () => {
    const fullBaseContacts = this.state.contacts
    const findName = this.state.filter.toLowerCase()

    return fullBaseContacts.filter(({name})=> name.toLowerCase().includes(findName))
  }

  render() {
    const visibleContacts = this.showContacts()
    
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
      <Title title="Contacts" children={<ListContacts arrayContacts={visibleContacts} filterContact={this.filterContact} />}/>
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

const ListContacts = ({arrayContacts, filterContact}) => {
  return <div>
        <Filter filterContact={filterContact} />
        <ul>
          {arrayContacts.map(item => <Contact contact={item} key={item.id} />)}
        </ul>
      </div>
}

const Contact = ({ contact }) => {
  const {name, number} = contact
  return <li>
          {name} : {number}
        </li>
}

const Filter = ({filterContact}) => {
  return <label>
          Find contacts by name
          <input
            onChange={filterContact}
            type="text"
            name="find"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
          />
        </label>
}