import { useState } from "react"
import SearchBar from "../searchbar/SearchBar"


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
        <p>Add some tasks</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <div key={task.id}>
              <li>
                {task.name}
                <button onClick={() => handleTaskDone(task.id)}>Done</button>
              </li>
            </div>
          ))}
        </ul>
      )}
    </>
  )
}
export default Body
