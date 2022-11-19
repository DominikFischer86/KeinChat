import "./Modal.scss"

type NewModalProps = {
  children: React.ReactNode
  show: boolean
}

const Modal = ({ children, show }: NewModalProps) => {
  return (
    <div className={show ? "modal-overlay open" : "modal-overlay"}>
      <div className="modal-container">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  )
}

export default Modal
