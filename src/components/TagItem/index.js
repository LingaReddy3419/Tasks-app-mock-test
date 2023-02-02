import './index.css'

const TagItem = props => {
  const {isActive, tagDetails, onClickTagBtn} = props
  const {optionId, displayText} = tagDetails

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
