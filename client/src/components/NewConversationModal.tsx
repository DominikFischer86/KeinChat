type NewConversationModalProps = {
  title: string
  onHide: () => void
}

const NewConversationModal = ({ title, onHide }: NewConversationModalProps) => {
  return (
    <div className="modal-header">
      <h2>{title}</h2>
      <button onClick={onHide}>X</button>
    </div>
  )
}

export default NewConversationModal
