import { useState, createContext, useContext, ReactNode } from "react"

import { useLocalstorage } from "../hooks/useLocalstorage"
import { useContacts } from "./ContactsProvider"

type ContactContextProps = {
  id: string
  children: ReactNode
}

type addMessageToConversationProps = {
  recipients: []
  text: string
  sender: string
}

export const ConversationsContext = createContext<any>(null)

export const useConversations = () => {
  return useContext(ConversationsContext)
}

const arrayEquality = (a: any, b: any) => {
  if (a.length !== b.length) return false

  a.sort()
  b.sort()

  return a.every((element: any, index: number) => {
    return element === b[index]
  })
}

export const ConversationsProvider = ({
  id,
  children,
}: ContactContextProps) => {
  const [conversations, setConversations] = useLocalstorage("conversations", [])
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)

  const { contacts } = useContacts()

  const addMessageToConversation = ({
    recipients,
    text,
    sender,
  }: addMessageToConversationProps) => {
    setConversations((prevConversations: any) => {
      let madeChange = false
      const newMessage = { sender, text }
      const newConversations = prevConversations.map((conversation: any) => {
        if (arrayEquality(conversation.recipients, recipients)) {
          madeChange = true
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage],
          }
        }

        return conversation
      })

      if (madeChange) return newConversations
      return [...prevConversations, { recipients, messages: [newMessage] }]
    })
  }

  const sendMessage = (recipients: [], text: string) => {
    addMessageToConversation({ recipients, text, sender: id })
  }

  const formattedConversations = conversations.map(
    (conversation: any, index: number) => {
      const recipients = conversation.recipients
        .map((recipient: string) => {
          const contact = contacts.find(
            (contact: any) => contact.id === recipient
          )
          const name = (contact && contact.name) || recipient
          return { id: recipient, name }
        })
        .sort(
          (a: { name: string }, b: { name: string }) =>
            a.name.length - b.name.length
        )

      const messages = conversation.messages.map((message: any) => {
        const contact = contacts.find(
          (contact: { id: string; sender: string }) =>
            contact.id === message.sender
        )
        const name = (contact && contact.name) || message.sender
        const fromMe = id === message.sender

        return { ...message, senderName: name, fromMe }
      })

      const selected = index === selectedConversationIndex
      return { ...conversation, messages, recipients, selected }
    }
  )

  const createConversation = (recipients: string[]) =>
    setConversations((prevConversations: string[]) => [
      ...prevConversations,
      { recipients, messages: [] },
    ])

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  }

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
}
