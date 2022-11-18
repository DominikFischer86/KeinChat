import { useState } from 'react'

import Login from './components/Login'

import './App.scss'

const App = () => {
    const [id, setId] = useState()

    return (
        <>
            {id}
            <Login onIdSubmit={setId} />
        </>
    )
}

export default App
