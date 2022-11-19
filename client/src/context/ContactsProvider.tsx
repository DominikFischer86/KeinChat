import { createContext, useContext, ReactNode } from "react"
import { useLocalstorage } from "../hooks/useLocalstorage"

type ContactContextProps = {
  children: React.ReactNode
}

export const ContactsContext = createContext<any>(null)

export const useContacts = () => {
  return useContext(ContactsContext)
}

export const ContactsProvider = ({ children }: ContactContextProps) => {
  const [contacts, setContacts] = useLocalstorage("contacts", [])

  const createContact = (id: string, name: string) =>
    setContacts((prevContacts: string[]) => [...prevContacts, { id, name }])

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  )
}
