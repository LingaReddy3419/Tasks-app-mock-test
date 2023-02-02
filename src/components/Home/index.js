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
    activeOption: tagsList[0].displayText,
    taskList: [],
    activeOptionId: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({activeOption: event.target.value})
  }

  onAddTaskBtn = () => {
    const {userInput, activeOption} = this.state

    const task = {
      id: uuidv4(),
      userInput,
      activeOption,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, task],
      userInput: '',
    }))
  }

  onClickTagBtn = optionId => {
    this.setState({activeOptionId: optionId})
  }

  onChangeActiveTab = () => {}

  render() {
    const {userInput, activeOption, taskList, activeOptionId} = this.state

    const filteredTabs = taskList.filter(
      each => each.activeOption.toUpperCase() !== activeOptionId.toUpperCase(),
    )

    return (
      <div className="app-container">
        <div className="first-container">
          <form className="form-container">
            <h1 className="first-head">Create a task!</h1>
            <div className="label-container">
              <label htmlFor="task" className="label-head">
                Task
              </label>
              <input
                type="text"
                id="task"
                className="user-input"
                value={userInput}
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
                value={activeOption}
                onChange={this.onChangeOption}
              >
                {tagsList.map(eachTag => (
                  <Option key={eachTag.optionId} optionDetails={eachTag} />
                ))}
              </select>
            </div>
            <button
              type="button"
              className="add-button"
              onClick={this.onAddTaskBtn}
            >
              Add Task
            </button>
          </form>
        </div>
        <div className="second-container">
          <h1 className="second-head">Tags</h1>
          <ul className="tags-container">
            {tagsList.map(each => (
              <TagItem
                key={each.optionId}
                tagDetails={each}
                isActive={activeOption.toUpperCase() === activeOptionId}
                onClickTagBtn={this.onClickTagBtn}
              />
            ))}
          </ul>
          <h1 className="second-head">Tasks</h1>
          <ul className="tasks-container">
            {filteredTabs.map(eachTask => (
              <Task key={eachTask.id} taskDetails={eachTask} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
