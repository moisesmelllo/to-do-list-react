import { useState } from "react"
import SearchBar from "../searchbar/SearchBar"
import './Body.css'
import CloseIcon from '@mui/icons-material/Close'

const Body = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const id = new Date().getTime()
    setTasks([...tasks, { id: id, name: task, done: false }]);
  };

  const handleTaskDone = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  return (
    <>
      <SearchBar onAddTask={addTask} />
      {tasks.length < 1 ? (
        <p className="empty-body">Add some tasks</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <div key={task.id}>
              <li>
                <div className="body-task-content">
                  <span className="body-task">{task.name}</span>
                  <button
                    className="body-button-done"
                    onClick={() => handleTaskDone(task.id)}
                  >
                    <CloseIcon
                    />
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      )}
    </>
  )
}
export default Body
