import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useTheme } from '../hooks/useTheme'


import './Navbar.css'
import Temple from '../assets/temple.svg'
import ThemeSelector from './ThemeSelector'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  const {mode} = useTheme()


  return (
    <nav className={`navbar ${mode}`}>
      <ul>
        <li className={`logo ${mode}`}>
          <img src={Temple} alt="scarface logo" />
          <span >Nancy App</span>
        </li>
        <ThemeSelector />

        {!user && (
        <>
        <li><Link to="/login" className={mode}>Login</Link></li>
        <li><Link to="/signup" className={mode}>Sign Up</Link></li>
        </>
        )}

        {user && (
        <li>
          {!isPending && <button className={`btn ${mode}`} onClick={logout}>Logout</button>}
          {isPending && <button className={`btn ${mode}`} disabled >Logging out ....</button>}
        </li>
        )}
      </ul>
      
    </nav>
  )
}
