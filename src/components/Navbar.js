import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

import './Navbar.css'
import Temple from '../assets/temple.svg'

export default function Navbar() {
  const { logout, isPending } = useLogout()

  return (
    <nav className='navbar'>
      <ul>
        <li className="logo">
          <img src={Temple} alt="scarface logo" />
          <span>Nancy App</span>
        </li>

        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li>
          {!isPending && <button className="btn" onClick={logout}>Logout</button>}
          {isPending && <button className="btn" disabled >Logging out ...</button>}
        </li>
      </ul>
      
    </nav>
  )
}
