// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteTodo} = props
  const {title, id} = itemDetails

  const onDeleteButton = () => {
    deleteTodo(id)
  }

  return (
    <li className="title-card-container">
      <p className="title-text">{title}</p>
      <button type="button" className="button" onClick={onDeleteButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
