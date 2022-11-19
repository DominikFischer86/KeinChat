import React, { useRef, useState } from "react"

import { useContacts } from "../context/ContactsProvider"

type NewContactModalProps = {
  title: string
  closeModal: () => void
}

const initialState = {
  id: "",
  name: "",
}

const NewContactModal = ({ title, closeModal }: NewContactModalProps) => {
  const [input, setInput] = useState(initialState)
  const [error, setError] = useState("")
  const idRef = useRef<any>(null)
  const nameRef = useRef<any>(null)
  const { createContact, contacts } = useContacts()
  const submitIsDisabled = !input.id.length || !input.name.length

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!!contacts.find((contact: any) => contact.id == input.id))
      return setError("ID already exists")

    createContact(idRef.current.value, nameRef.current.value)
    setInput(initialState)
    closeModal()
  }

  const handleChange = (e: React.SyntheticEvent) => {
    const { name, value }: any = e.target

    setError("")
    setInput({ ...input, [name]: value })
  }

  return (
    <>
      <div className="modal-header">
        <h2>{title}</h2>
        <button onClick={closeModal}>X</button>
      </div>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Id</label>
            <input
              type="text"
              ref={idRef}
              required
              name="id"
              value={input.id}
              onChange={handleChange}
            />
            {!!error && <span className="error-text">{error}</span>}
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              ref={nameRef}
              required
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </div>
          <button disabled={submitIsDisabled} className="submit-button">Create</button>
        </form>
      </div>
    </>
  )
}

export default NewContactModal
