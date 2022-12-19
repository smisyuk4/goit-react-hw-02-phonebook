import { IconContext } from 'react-icons';
import { RiUserUnfollowFill } from 'react-icons/ri';

import { ItemContact, ButtonRemoveContact } from './Contact.styled';

export const Contact = ({ contact, onClickBtnRemove }) => {
    const { id, name, number } = contact;
    return (
        <ItemContact>
            {name}: {number}
            <ButtonRemoveContact
                type="button"
                onClick={() => onClickBtnRemove(id)}
            >
                <IconContext.Provider value={{ className: 'global-icon' }}>
                    <RiUserUnfollowFill />
                </IconContext.Provider>
                Remove
            </ButtonRemoveContact>
        </ItemContact>
    );
};
