import { useState } from "react"

import { useContacts } from "../context/ContactsProvider"
import { useConversations } from "../context/ConversationsProvider"

type NewConversationModalProps = {
  title: string
  closeModal: () => void
}

const NewConversationModal = ({
  title,
  closeModal,
}: NewConversationModalProps) => {
  const [selectedContactIds, setSelectedContactIds]: any = useState([])

  const { contacts } = useContacts()
  const { createConversation } = useConversations()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    createConversation(selectedContactIds)
    closeModal()
  }

  const handleCheckboxChange = (id: string) => {
    setSelectedContactIds((prevIds: string[]) => {
      if (prevIds.includes(id))
        return prevIds.filter((prevId: string) => id !== prevId)
      return [...prevIds, id]
    })
  }

  return (
    <>
      <div className="modal-header">
        <h2>{title}</h2>
        <button onClick={closeModal}>X</button>
      </div>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          {contacts.map((contact: any) => (
            <div key={contact.id} className="form-checkbox-group">
              <input
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                onChange={() => handleCheckboxChange(contact.id)}
              />
              <label>{contact.name}</label>
            </div>
          ))}
          <button
            disabled={!selectedContactIds.length}
            className="submit-button"
          >
            Create
          </button>
        </form>
      </div>
    </>
  )
}

export default NewConversationModal
