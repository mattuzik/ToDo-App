import { useState } from "react"

interface Task {
  title: string;
  id: any;
  isCompleted: boolean;
}

const useTasks = () => {
  // states
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  })

  const [searchValue, setSearchValue] = useState('')
  
  // functions
  const addTask = (title: string) => {
    const newTask: Task = {
      title,
      id: crypto.randomUUID(),
      isCompleted: false
    }

    if (title) {
      setTasks((prev) => [...prev, newTask])
    }
  }

  const deleteTask = (id: any) => {
    const newTaskItems = tasks.filter(task => task.id !== id)
    setTasks(newTaskItems)
  }

  const toggleTaskStatus = (id: any, isCompleted: any) => {
    setTasks(
      tasks.map((task) => {
        if(task.id === id) {
          return { ...task, isCompleted: !isCompleted }
        }      
        return task}
      )
    )
  }

  const onDeleteAllTasksClick = () => {
    if (confirm('Are tou sure to delete all tasks?')) {
      setTasks([])
    }
  }

  return {
    tasks, 
    setTasks, 
    addTask, 
    deleteTask, 
    toggleTaskStatus, 
    searchValue, 
    setSearchValue, 
    onDeleteAllTasksClick
  }
}

export default useTasks