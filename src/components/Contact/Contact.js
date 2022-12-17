export const Contact = ({ contact }) => {
  const {name, number} = contact
  return <li>
          {name} : {number}
        </li>
}