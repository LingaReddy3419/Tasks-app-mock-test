import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from '../TagItem'
import Option from '../Option'
import Task from '../Task'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {
    userInput: '',
    optionSelected: tagsList[0].displayText,
    taskList: [],
    activeOptionId: '',
  }

  onChangeOption = event => {
    this.setState({optionSelected: event.target.value})
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddTask = event => {
    event.preventDefault()
    const {userInput, optionSelected} = this.state

    const newTask = {
      id: uuidv4(),
      userInput,
      optionSelected,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      userInput: '',
      optionSelected: tagsList[0].displayText,
    }))
  }

  onClickTagBtn = optionId => {
    const {activeOptionId} = this.state

    if (activeOptionId === optionId) {
      this.setState({activeOptionId: ''})
    } else {
      this.setState({activeOptionId: optionId})
    }
  }

  render() {
    const {userInput, optionSelected, taskList, activeOptionId} = this.state

    let filteredTasks
    if (activeOptionId === '') {
      filteredTasks = taskList
    } else {
      filteredTasks = taskList.filter(
        eachTask => eachTask.optionSelected.toUpperCase() === activeOptionId,
      )
    }

    const noTasks = filteredTasks.length === 0
    return (
      <div className="app-container">
        <div className="first-container">
          <form className="form-container" onSubmit={this.onAddTask}>
            <h1 className="first-head">Create a task!</h1>
            <div className="label-container">
              <label htmlFor="task" className="label-head">
                Task
              </label>
              <input
                type="text"
                id="task"
                value={userInput}
                className="user-input"
                placeholder="Enter the task here"
                onChange={this.onChangeUserInput}
              />
            </div>
            <div className="label-container">
              <label htmlFor="tag" className="label-head">
                Tags
              </label>
              <select
                className="options"
                onChange={this.onChangeOption}
                value={optionSelected}
              >
                {tagsList.map(eachTag => (
                  <Option key={eachTag.optionId} optionDetails={eachTag} />
                ))}
              </select>
            </div>
            <button type="submit" className="add-button">
              Add Task
            </button>
          </form>
        </div>
        <div className="second-container">
          <h1 className="second-head">Tags</h1>
          <ul className="tags-container">
            {tagsList.map(eachTag => (
              <TagItem
                key={eachTag.optionId}
                tagDetails={eachTag}
                onClickTagBtn={this.onClickTagBtn}
                activeOptionId={activeOptionId}
              />
            ))}
          </ul>
          <h1 className="second-head">Tasks</h1>

          {noTasks ? (
            <div className="tasks-main-container">
              <p className="no-task-text">No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="tasks-container">
              {filteredTasks.map(eachTask => (
                <Task key={eachTask.id} taskDetails={eachTask} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
