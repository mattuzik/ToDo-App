import { useContext, useEffect } from "react"
import NewTaskForm from "../components/NewTaskForm"
import SearchForm from "../components/SearchForm"
import TaskList from "../components/TaskList"

import { TasksContext } from "../contexts/TasksContext"

const Todo = () => {
  const { tasks } : any = useContext(TasksContext)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todo container">
      <h3 className="todo__title">To-Do App</h3>
      <NewTaskForm />
      <SearchForm />
      <TaskList />
    </div>
  )
}
 
export default Todo