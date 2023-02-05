import './index.css'

const Option = props => {
  const {optionDetails} = props

  const {optionId, displayText} = optionDetails

  return (
    <option key={optionId} value={optionId}>
      {displayText}
    </option>
  )
}

export default Option
