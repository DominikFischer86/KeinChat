import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react"
import io from "socket.io-client"

type SocketContextProps = {
  id: string
  children: ReactNode
}

export const SocketContext = createContext<any>(null)

export const useSocket = () => {
  return useContext(SocketContext)
}

export const SocketProvider = ({ id, children }: SocketContextProps) => {
  const [socket, setSocket] = useState<any>()

  useEffect((): any => {
    const newSocket = io("http://localhost:5000", { query: { id } })
   
    setSocket(newSocket)

    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}
