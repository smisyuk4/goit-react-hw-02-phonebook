export const Filter = ({ filterContact, filter }) => {
    return (
        <label>
            Find contacts by name
            <input
                onChange={filterContact}
                value={filter}
                type="text"
                name="find"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces."
            />
        </label>
    );
};
