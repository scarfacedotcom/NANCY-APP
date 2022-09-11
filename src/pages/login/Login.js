import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

// styles & images
import PasswordIcon from '../../assets/password_icon.svg'
import './Login.css'

export default function Login() {
  const { login, isPending, error } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input
          required
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
      </label>
      <label>
        <span>password:</span>
        {/* <img src={PasswordIcon} alt="password logo" className='password' /> */}
        <input 
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Log in</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error && <div className="error">{error}</div> }
    </form>
  )
}