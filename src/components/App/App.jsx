// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { Component } from "react";
import { nanoid } from "nanoid";


export class App extends Component {
  state = {
    contacts: [{name: 'test-1', id: 1}, {name: 'test-2', id: 2}],
    name: ''
  }

  nameContact = (event) => {
    // this.setState({name: event.target.value})
  }

  sendContact = (event) => {
    event.preventDefault()
    const form = event.currentTarget      
    const name = form.elements.name.value
    const contactId = nanoid()
    const newContact = { name, id: contactId }

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
      <Title title="Phonebook" children={<Form sendContact={this.sendContact} nameContact={this.nameContact} />} />      
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

const Form = ({sendContact, nameContact}) => {
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
              ></input>
            </label>
            <button type="submit">Add contact</button>
          </form>
}

const ListContacts = ({arrayContacts}) => {
  return <ul>
    {arrayContacts.map(item => <Contact contact={item.name} key={item.id} />)}
        </ul>
}

const Contact = ({contact}) => {
  return <li>
          {contact}
        </li>
}