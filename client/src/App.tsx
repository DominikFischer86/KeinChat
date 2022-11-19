import Login from './components/Login'
import { useLocalstorage } from './hooks/useLocalstorage'

import Dashboard from './components/Dashboard'

import './App.scss'

const App = () => {
    const [id, setId] = useLocalstorage('id', null)

    return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
}

export default App
