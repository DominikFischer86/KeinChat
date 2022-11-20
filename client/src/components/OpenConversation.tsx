import React, { useState } from "react"

import { useConversations } from "../context/ConversationsProvider"

import "./OpenConversation.scss"

const OpenConversation = () => {
  const [text, setText] = useState("")
  const { sendMessage, selectedConversation } = useConversations()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    sendMessage(
      selectedConversation.recipients.map(
        (recipient: { id: string }) => recipient.id
      ),
      text
    )
    setText("")
  }

  return (
    <div className="open-conversation-container">
      <div className="messages-wrapper"></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input
              type="textarea"
              required
              value={text}
              onChange={(e: React.SyntheticEvent | any) =>
                setText(e.target.value)
              }
            />
            <button className="submit-button" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default OpenConversation
