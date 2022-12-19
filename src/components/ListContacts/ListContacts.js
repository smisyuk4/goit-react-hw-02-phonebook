import { Filter } from 'components/Filter';
import { Contact } from 'components/Contact';
import { BaseContacts, CollectionContacts } from './ListContacts.styled';

export const ListContacts = ({
    arrayContacts,
    filterContact,
    filter,
    onClickBtnRemove,
}) => {
    return (
        <BaseContacts>
            <Filter filterContact={filterContact} filter={filter} />
            <CollectionContacts>
                {arrayContacts.map(item => (
                    <Contact
                        contact={item}
                        key={item.id}
                        onClickBtnRemove={onClickBtnRemove}
                    />
                ))}
            </CollectionContacts>
        </BaseContacts>
    );
};
