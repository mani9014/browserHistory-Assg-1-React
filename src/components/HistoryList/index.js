import './index.css'

const HistoryDetailList = props => {
  const {historyDetails, deleteList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteList = () => {
    deleteList(id)
  }
  return (
    <li className="history-list-container">
      <div className="first-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-image" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button onClick={onDeleteList} data-testid="delete" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default HistoryDetailList
