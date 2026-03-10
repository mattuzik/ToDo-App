import TaskItem from "./TaskItem"
import { TasksContext } from '../contexts/TasksContext'
import { useContext } from "react"

const TaskList = () => {
  const { tasks, onDeleteAllTasksClick, searchValue } : any = useContext(TasksContext)

  const filteredTasks = tasks.length > 0 ? tasks.filter((obj: any) => {
    const cuttedSeacrhValue = searchValue.toLocaleLowerCase().trim()
    const title = obj.title.toLowerCase()

    if (title.includes(cuttedSeacrhValue)) {
      return true
    }

    return false
  }) : []

  return (
  <div className="tasks">
    <div className="tasks__info">
      <h5 className="tasks__title">Total tasks: {tasks.length}</h5>
      {tasks.length > 0 && <h5 className="tasks__delete-all" onClick={onDeleteAllTasksClick}>Delete All Tasks</h5>}
    </div>

    {tasks.length == 0 && <h5 className="tasks__empty">There no tasks yet</h5>}

    <ul className="tasks__list">
      {
        filteredTasks.map((item: any) => {
          return <TaskItem item={item} key={item.id}/>
        })
      }
    </ul>
  </div>
  )
}
 
export default TaskList