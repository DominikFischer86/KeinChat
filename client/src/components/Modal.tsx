import "./Modal.scss"

type NewModalProps = {
  children: React.ReactNode
  show: boolean
  onHide: () => void
  title: string
}

const Modal = ({ title, children, show, onHide }: NewModalProps) => {
  return (
    <div className={show ? "modal-overlay open" : "modal-overlay"}>
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onHide}>X</button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  )
}

export default Modal
