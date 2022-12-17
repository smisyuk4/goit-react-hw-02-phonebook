export const Filter = ({filterContact}) => {
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