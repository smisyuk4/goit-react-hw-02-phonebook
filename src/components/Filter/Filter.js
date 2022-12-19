import { IconContext } from 'react-icons';
import { RiTeamFill } from 'react-icons/ri';
import { LabelFilter, InputFilter } from './Filter.styled';

export const Filter = ({ filterContact, filter }) => {
    return (
        <LabelFilter>
            <IconContext.Provider value={{ className: 'global-icon' }}>
                <RiTeamFill />
            </IconContext.Provider>
            Find contacts by name
            <InputFilter
                onChange={filterContact}
                value={filter}
                type="text"
                name="find"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces."
            />
        </LabelFilter>
    );
};
