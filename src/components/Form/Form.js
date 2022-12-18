import { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
    name: '',
    number: '',
};
export class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    changeState = event => {
        const { name, value } = event.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    resetInputs = () => {
        this.setState({ ...INITIAL_STATE });
    };

    sendContact = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const contactId = nanoid();
        const newContact = { name, number, id: contactId };

        //move data to App
        this.props.onSubmit(newContact);
        this.resetInputs();
    };

    render() {
        return (
            <form onSubmit={this.sendContact}>
                <label>
                    Name:
                    <input
                        onChange={this.changeState}
                        value={this.state.name}
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
                        onChange={this.changeState}
                        value={this.state.number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}
