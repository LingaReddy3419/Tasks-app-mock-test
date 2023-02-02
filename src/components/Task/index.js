import './index.css'

const Task = props => {
  const {taskDetails} = props
  const {userInput, activeOption} = taskDetails

  return (
    <li className="task-continer">
      <p className="task-text">{userInput}</p>
      <p className="task-option">{activeOption}</p>
    </li>
  )
}

export default Task
