import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Feed the cat",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Clean toilet",
      day: "Feb 5th at 0:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Buy  food for the cat",
      day: "March 5th at 8:30pm",
      reminder: false
    },
    {
      id: 4,
      text: "Call the vet",
      day: "Feb 5th at 5:30pm",
      reminder: true
    },
    
  ]);

  const deleteTask = (id) => {
    setTasks((x) => {
      let prevState = x;
      let newState = prevState.filter(x => x.id !== id);
      return newState;
    })
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        let newTask = t;
        newTask.reminder = !t.reminder;
        return newTask;
      }
      return t;
    }))

  }

  return (
    <div className="container">
      <Header />
      <AddTask/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}


export default App;
