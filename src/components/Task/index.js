import './index.css'

const Task = props => {
  const {taskDetails} = props
  const {userInput, optionSelected} = taskDetails

  return (
    <li className="task-continer">
      <p className="task-text">{userInput}</p>
      <p className="task-option">{optionSelected}</p>
    </li>
  )
}

export default Task
