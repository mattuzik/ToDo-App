import { TasksContext } from '../contexts/TasksContext'
import { memo, useContext } from "react"

const TaskItem = ({item} : any) => {
  const { deleteTask, toggleTaskStatus } : any = useContext(TasksContext)

  return (
  <li className="tasks__item">
    <div className="tasks__item-column">

      <div className={`tasks__item-checkbox checkbox ${item.isCompleted ? 'is-active' : ''}`} onClick={() => toggleTaskStatus(item.id, item.isCompleted)}>
        <div className="circle"></div>
      </div>

      <p className={`tasks__item-title ${item.isCompleted ? 'is-active' : ''}`}>{item.title}</p>
    </div>

    <div className="tasks__item-controls">
      <button className="button tasks__item-button" type="submit" title="Add task" onClick={() => deleteTask(item.id)}>х</button>
    </div>
  </li>
  )
}
 
export default memo(TaskItem)