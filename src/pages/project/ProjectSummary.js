import Avatar from '../../components/Avatar'
import { useFirestore } from "../../hooks/useFirestore"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useHistory } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore('projects')
  const { user } = useAuthContext()
  const history = useHistory()
  const {mode} = useTheme()

  const handleClick = (e) => {
    deleteDocument(project.id)
    history.push('/')
  }
  return (
    <div>
      <div className={`project-summary ${mode}`}>
        <h2 className={`page-title ${mode}`}>{project.name}</h2>
        <p className={`${mode}`}>By {project.createdBy.displayName}</p>
        <p className={`due-date ${mode}`}>
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className={`details ${mode}`}>
          {project.details}
        </p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map(user => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
      
      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>Mark as Complete</button>
        )}
      
    </div>
  )
}
