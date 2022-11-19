import { useRef } from "react"

type NewContactModalProps = {
  title: string
  closeModal: () => void
}

const NewContactModal = ({ title, closeModal }: NewContactModalProps) => {
  const idRef = useRef(null)
  const nameRef = useRef(null)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // createContact(idRef.current.value, nameRef.current.value)
    closeModal()
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
            <input type="text" ref={idRef} required />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" ref={nameRef} required />
          </div>
          <button className="submit-button">Create</button>
        </form>
      </div>
    </>
  )
}

export default NewContactModal
