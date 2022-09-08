import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'

// styles
import './Create.css'

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
]

export default function Create() {
  const { documents } = useCollection('users')
  const [ users, setUsers ] = useState([])

  // form field values
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])

  useEffect(()=> {
    if(documents) {
      const options = documents.map(user => {
        return { value:user, label: user.displayName }
      })
      setUsers(options)
    }
  }, [documents])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name, details, dueDate, category, assignedUsers)
  }

  return (
    <div className='create-form'>
      <h2 className="page-title">Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input 
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
        <span>Project Details:</span>
          <textarea 
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input 
            required
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <label>
          <span>Project Category:</span>
          <Select
            onChange={(option) => setCategory(option) } 
            options={categories}
          />
        </label>
        <label>
          <span>Project Assigned to:</span>
          <Select
            onChange={(option) => setAssignedUsers(option)} 
            options={users}
            isMulti
          />
        </label>
        <button className="btn">Add Project</button>

      </form>
    </div>
  )
}