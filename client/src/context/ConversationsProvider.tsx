import { createContext, useContext, ReactNode } from "react"

import { useLocalstorage } from "../hooks/useLocalstorage"
import { useContacts } from "./ContactsProvider"

type ContactContextProps = {
  children: ReactNode
}

export const ConversationsContext = createContext<any>(null)

export const useConversations = () => {
  return useContext(ConversationsContext)
}

export const ConversationsProvider = ({ children }: ContactContextProps) => {
  const [conversations, setConversations] = useLocalstorage("conversations", [])

  const { contacts } = useContacts()

  const formattedConversations = conversations.map((conversation: any) => {
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

    return { ...conversation, recipients }
  })

  const createConversation = (recipients: string[]) =>
    setConversations((prevConversations: string[]) => [
      ...prevConversations,
      { recipients, messages: [] },
    ])

  const value = {
    conversations: formattedConversations,
    createConversation,
  }

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
}
