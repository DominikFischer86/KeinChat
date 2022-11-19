import Login from "./components/Login"
import { useLocalstorage } from "./hooks/useLocalstorage"

import Dashboard from "./components/Dashboard"
import { ContactsProvider } from "./context/ContactsProvider"

import "./App.scss"

const App = () => {
  const [id, setId] = useLocalstorage("id", null)

  const DashboardWithContext = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )

  return id ? DashboardWithContext : <Login onIdSubmit={setId} />
}

export default App
