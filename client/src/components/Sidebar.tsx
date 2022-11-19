import { useState } from "react"

import Conversations from "./Conversations"
import Contacts from "./Contacts"
import Modal from "./Modal"
import NewContactModal from "./NewContactModal"
import NewConversationModal from "./NewConversationModal"

import "./Sidebar.scss"

type SidebarProps = {
  id: string
}

const CONVERSATIONS_KEY = "conversations"
const CONTACT_KEY = "contacts"

const Sidebar = ({ id }: SidebarProps) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => {
    setModalOpen(false)
  }
  const conversationOpen = activeKey === CONVERSATIONS_KEY

  return (
    <div className="sidebar-container">
      <nav className="tab-container">
        <ul>
          <li className={activeKey === CONVERSATIONS_KEY ? "active" : ""}>
            <button onClick={() => setActiveKey(CONVERSATIONS_KEY)}>
              Conversations
            </button>
          </li>
          <li className={activeKey === CONTACT_KEY ? "active" : ""}>
            <button onClick={() => setActiveKey(CONTACT_KEY)}>Contacts</button>
          </li>
        </ul>
      </nav>
      <div className="tab-content">
        {activeKey === CONVERSATIONS_KEY && <Conversations />}
        {activeKey === CONTACT_KEY && <Contacts />}
      </div>
      <div className="id-field">
        Your Id: <p>{id}</p>
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className="sidebar-create-button"
      >
        New {conversationOpen ? "Conversation" : "Contact"}
      </button>
      <Modal
        title={`New ${conversationOpen ? "Conversation" : "Contact"}`}
        show={modalOpen}
        onHide={closeModal}
      >
        {conversationOpen ? <NewConversationModal /> : <NewContactModal />}
      </Modal>
    </div>
  )
}

export default Sidebar
