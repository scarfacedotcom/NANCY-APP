import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Avatar from './Avatar'
// styles
import './ProjectList.css'


export default function ProjectList({projects}) {
  const {mode} = useTheme()
  return (
    <div className={`project-list ${mode}`}>
      {projects.length === 0 && <p>Opps! No Projects Yet</p> }
      {projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString() }</p>
          <div className={`assigned-to ${mode}`}>
            <ul>
              {project.assignedUsersList.map(user => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              )) }
            </ul>
          </div>
        </Link>
      ))}
      
    </div>
  )
}
