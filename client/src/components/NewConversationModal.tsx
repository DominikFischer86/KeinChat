type NewConversationModalProps = {
  title: string
  closeModal: () => void
}

const NewConversationModal = ({
  title,
  closeModal,
}: NewConversationModalProps) => {
  return (
    <>
      <div className="modal-header">
        <h2>{title}</h2>
        <button onClick={closeModal}>X</button>
      </div>
      <div className="modal-content">Body</div>
    </>
  )
}

export default NewConversationModal
