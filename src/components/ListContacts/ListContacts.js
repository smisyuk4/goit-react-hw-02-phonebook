import { Filter } from "components/Filter"
import { Contact } from "components/Contact"

export const ListContacts = ({ arrayContacts, filterContact }) => {
    return <div>
            <Filter filterContact={filterContact} />
            <ul>
            {arrayContacts.map(item => <Contact contact={item} key={item.id} />)}
            </ul>
        </div>
}