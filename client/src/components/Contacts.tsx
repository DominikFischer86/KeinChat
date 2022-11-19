import { useContacts } from "../context/ContactsProvider"

import "./Contacts.scss"

const Contacts = () => {
  const { contacts } = useContacts()

  return (
    <ul className="list-group">
      {contacts.map((contact: any) => (
        <li key={contact?.id}>{contact?.name}</li>
      ))}
    </ul>
  )
}

export default Contacts
