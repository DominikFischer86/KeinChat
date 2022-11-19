type NewContactModalProps = {
  title: string
  onHide: () => void
}

const NewContactModal = ({ title, onHide }: NewContactModalProps) => {
  return (
    <div className="NewContactModal-container">
      <div className="modal-header">
        <h2>{title}</h2>
        <button onClick={onHide}>X</button>
      </div>
    </div>
  )
}

export default NewContactModal
