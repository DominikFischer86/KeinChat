import Login from './components/Login'
import { useLocalstorage } from './hooks/useLocalstorage'

import './App.scss'

const App = () => {
    const [id, setId] = useLocalstorage("id", null)

    return (
        <>
            {id}
            <Login onIdSubmit={setId} />
        </>
    )
}

export default App
