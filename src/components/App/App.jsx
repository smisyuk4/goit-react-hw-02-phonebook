import { Component } from "react";
import { nanoid } from "nanoid";
import { Form } from "components/Form";
import { ListContacts } from "components/ListContacts";
import { Title } from "components/Title";

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
      <h1>My favorite</h1>    
      <Title title="Phonebook" children={<Form sendContact={this.sendContact} nameContact={this.nameContact} numberContact={this.numberContact} />} />      
      <Title title="Contacts" children={<ListContacts arrayContacts={visibleContacts} filterContact={this.filterContact} />}/>
    </div>
  }
}