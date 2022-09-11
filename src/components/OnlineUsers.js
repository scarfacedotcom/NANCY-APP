import { useCollection } from '../hooks/useCollection'
import { useTheme } from '../hooks/useTheme'
import Avatar from './Avatar'
//styles
import './OnlineUsers.css'


export default function OnlineUsers() {
  const { error, documents } = useCollection('users')
  const {mode} = useTheme()
  return (
    <div className={`user-list ${mode}`}>
      <h2>All Users</h2>
      {error && <div className={`error ${mode}`}>{error}</div> }
      {documents && documents.map(user => (
        <div key={user.id} className={`user-list-item ${mode}`}>
          {user.online && <span className={`online-user ${mode}`}></span>}
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} />
        </div>
      ))}
      
    </div>
  )
}
