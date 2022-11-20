import Login from "./components/Login"
import { useLocalstorage } from "./hooks/useLocalstorage"

import Dashboard from "./components/Dashboard"
import { ContactsProvider } from "./context/ContactsProvider"
import { ConversationsProvider } from "./context/ConversationsProvider"

import "./App.scss"

const App = () => {
  const [id, setId] = useLocalstorage("id", null)

  const DashboardWithContext = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )

  return id ? DashboardWithContext : <Login onIdSubmit={setId} />
}

export default App
