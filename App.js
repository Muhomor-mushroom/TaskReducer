import { useReducer } from "react";
import { AddTask } from "./components/AddTask";
import { TaskWrapper } from "./components/TaskWrapper";
import tasksReducer from "./components/tasksReducer";



export default function App () {
  
const [tasks, dispatch] = useReducer (tasksReducer, initialTasks)

  function handleAddTask (text) {
dispatch ({
  type: 'added',
  text: text,
  id: nextId++
})
  }

  function handleChangeTask (task) {
    dispatch ({
      type: 'changed',
      task: task,
    })
      }

      function handleDeleteTask (taskId) {
        dispatch ({
          type: 'deleted',
          id: taskId
        })
          }

  return (
    <div className="App">
<AddTask onAddTask={handleAddTask}/>
<TaskWrapper tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

let initialTasks = [];
let nextId = 0
