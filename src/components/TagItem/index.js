import './index.css'

const TagItem = props => {
  const {tagDetails, onClickTagBtn, activeOptionId} = props
  const {optionId, displayText} = tagDetails

  const isActive = optionId.toUpperCase() === activeOptionId

  const activeBtn = isActive ? 'active-button tag-button' : 'tag-button'

  const onClickTab = () => {
    onClickTagBtn(optionId)
  }
  return (
    <li className="tag-item">
      <button type="button" className={activeBtn} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
