export const Contact = ({ contact, onClickBtnRemove }) => {
    const { id, name, number } = contact;
    return (
        <li>
            {name}: {number}
            <button type="button" onClick={() => onClickBtnRemove(id)}>
                Remove
            </button>
        </li>
    );
};
