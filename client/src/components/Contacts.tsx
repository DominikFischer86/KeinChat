import { useContacts } from "../context/ContactsProvider"

type ContactProps = {
  id: string
  name: string
}

const Contacts = () => {
  const { contacts } = useContacts()

  return (
    <ul className="list-group">
      {contacts.map((contact: ContactProps) => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  )
}

export default Contacts
