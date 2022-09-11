import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { useTheme } from '../../hooks/useTheme'

// styles & images
import './Login.css'

export default function Login() {
  const { login, isPending, error } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {mode} = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className={`auth-form ${mode}`}>
      <h2 className={`${mode}`}>Login</h2>
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
        <input 
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
      </label>
      {!isPending && <button className={`btn ${mode}`}>Log in</button>}
      {isPending && <button className={`btn ${mode}`} disabled>Loading...</button>}
      {error && <div className= {`error ${mode}`}>{error}</div> }
    </form>
  )
}