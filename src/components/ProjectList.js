
// styles
import './ProjectList.css'


export default function ProjectList({projects}) {
  return (
    <div>
      {projects.length === 0 && <p>Opps! No Projects Yet</p> }
      {projects.map(project => (
        <div key={project.id}>{project.name}</div>
      ))}
      
    </div>
  )
}
