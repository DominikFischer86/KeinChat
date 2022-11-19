import Sidebar from "./Sidebar"

import "./Dashboard.scss"

type DashboardProps = {
  id: string
}

const Dashboard = ({ id }: DashboardProps) => {
  return (
    <div className="dashboard-container">
      <Sidebar id={id} />
    </div>
  )
}

export default Dashboard
