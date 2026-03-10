import { TasksContext } from '../contexts/TasksContext'
import { memo, useContext } from "react"

const SearchForm = () => {
  const { setSearchValue, searchValue } : any = useContext(TasksContext)

  return (
  <form className="todo__form form">
    <input 
      className="form__input" 
      id="search-task" 
      placeholder="Search Task" 
      maxLength={64}
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  </form>
  )
}
 
export default memo(SearchForm)