import Todo from "./pages/Todo"
import { TasksProvider } from "./contexts/TasksContext"

function App() {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default App
