import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { IconContext } from 'react-icons';
import {
    RiContactsFill,
    RiUserVoiceFill,
    RiUserFollowFill,
} from 'react-icons/ri';
import { FormWrp, InputForm, LabelForm, ButtonForm } from './Form.styled';

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

        //check uniq contact
        if (!this.checkUniq(name)) {
            //move data to App
            this.props.onSubmit(newContact);
            Notify.success('The contact has been sent to storage', {
                position: 'center-top',
            });
            this.resetInputs();
        } else {
            Report.warning(
                'Sorry',
                'Not a unique contact - write a new one!',
                'Okay'
            );
        }
    };

    checkUniq = name => {
        const contactsBase = this.props.contactsBase;
        const newName = name.toLowerCase();

        return contactsBase.find(({ name }) => name.toLowerCase() === newName);
    };

    render() {
        return (
            <FormWrp onSubmit={this.sendContact}>
                <LabelForm>
                    <IconContext.Provider value={{ className: 'global-icon' }}>
                        <RiContactsFill />
                    </IconContext.Provider>
                    Name:
                    <InputForm
                        onChange={this.changeState}
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </LabelForm>
                <LabelForm>
                    <IconContext.Provider value={{ className: 'global-icon' }}>
                        <RiUserVoiceFill />
                    </IconContext.Provider>
                    Number:
                    <InputForm
                        onChange={this.changeState}
                        value={this.state.number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </LabelForm>
                <ButtonForm type="submit">
                    <IconContext.Provider value={{ className: 'global-icon' }}>
                        <RiUserFollowFill />
                    </IconContext.Provider>
                    Add contact
                </ButtonForm>
            </FormWrp>
        );
    }
}
