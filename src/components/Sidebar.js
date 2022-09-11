import { NavLink } from "react-router-dom"
import Avatar from "./Avatar"
import { useAuthContext } from '../hooks/useAuthContext'
import { useTheme } from "../hooks/useTheme"

// styles & images
import "./Sidebar.css"
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'


export default function Sidebar() {
  const {user} = useAuthContext()
  const { color } = useTheme()
  return (
    <div className="sidebar" style={{ background: color }}>
      <div className="sidebar-content" >
        <div className="user">
          <Avatar src={ user.photoURL } />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/create">
              <img src={AddIcon} alt="add project icon" />
              <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
  )
}
