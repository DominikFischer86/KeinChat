import Sidebar from "./Sidebar"

import "./Dashboard.scss"
import OpenConversation from "./OpenConversation"
import { useConversations } from "../context/ConversationsProvider"

type DashboardProps = {
  id: string
}

const Dashboard = ({ id }: DashboardProps) => {
  const { selectedConversation } = useConversations()

  return (
    <div className="dashboard-container">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  )
}

export default Dashboard
