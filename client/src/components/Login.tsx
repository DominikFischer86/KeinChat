import { useRef } from "react"
import { v4 as uuidV4 } from "uuid"

import "./Login.scss"

const Login = ({ onIdSubmit }: any) => {
    const idRef = useRef<any>()

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }

    const createNewId = () => {
        onIdSubmit(uuidV4())
    }

    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="idInput">Enter your Id</label>
                    <input id="idInput" type="text" ref={idRef} required />
                    <div>
                        <button type="submit">Login</button>
                        <button
                            onClick={createNewId}
                            className="secondary-button"
                        >
                            Create New Id
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
