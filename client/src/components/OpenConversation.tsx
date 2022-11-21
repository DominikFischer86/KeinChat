import React, { useState, useCallback } from "react"

import { useConversations } from "../context/ConversationsProvider"

import "./OpenConversation.scss"

const OpenConversation = () => {
  const [text, setText] = useState("")
  const { sendMessage, selectedConversation } = useConversations()

  const setRef = useCallback((node: any) => {
    if (node) return node.scrollIntoView({ smooth: true })
  }, [])

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
      <div className="messages-container" id="scrollbar">
        <div className="messages-wrapper">
          {selectedConversation.messages.map((message: any, index: number) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index

            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={message.fromMe ? "message fromMe" : "message"}
              >
                <div className={message.fromMe ? "text fromMe" : "text"}>
                  {message.text}
                </div>
                <div className={message.fromMe ? "sender fromMe" : "sender"}>
                  {message.fromMe ? "You" : message.senderName}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <textarea
              required
              value={text}
              wrap="soft"
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
