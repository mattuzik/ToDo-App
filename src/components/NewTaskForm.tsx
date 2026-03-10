import { memo, useContext, useRef, useState } from "react"
import { TasksContext } from '../contexts/TasksContext'

const NewTaskForm = () => {
  const { addTask } : any = useContext(TasksContext)
  const [addingTaskTitleValue, setAddingTaskTitleValue] = useState('')

  const addTaskInput = useRef<HTMLInputElement>(null)

  const onAddTaskClick = (seacrhValue: string) => {
    setAddingTaskTitleValue('')
    addTask(seacrhValue.trim().toLowerCase())
    addTaskInput.current?.focus()
  }

  return (
  <form className="todo__form form">
    <input className="form__input" id="new-task" placeholder="New Task" maxLength={64}
      onChange={(event) => {setAddingTaskTitleValue(event.target.value)}}
      value={addingTaskTitleValue}
      ref={addTaskInput}
    />
    <button className="button todo__button" type="submit" title="Add task" onClick={(event) => {onAddTaskClick(addingTaskTitleValue); event.preventDefault()}}>+</button>
  </form>
  )
}
 
export default memo(NewTaskForm)