import { createContext } from "react";
import useTasks from "../hooks/useTasks";

export const TasksContext = createContext({})

export const TasksProvider = (props: any) => {
  const {
    children
  } = props

  const {
    tasks, 
    setTasks, 
    addTask, 
    deleteTask, 
    toggleTaskStatus, 
    searchValue, 
    setSearchValue, 
    onDeleteAllTasksClick
  } = useTasks()

  return (
    <TasksContext.Provider
      value={{
        tasks, 
        setTasks, 
        addTask, 
        deleteTask, 
        toggleTaskStatus, 
        searchValue, 
        setSearchValue, 
        onDeleteAllTasksClick  
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}