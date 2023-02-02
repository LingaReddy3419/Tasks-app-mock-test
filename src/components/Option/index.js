import './index.css'

const Option = props => {
  const {optionDetails} = props

  const {displayText} = optionDetails

  return <option>{displayText}</option>
}

export default Option
