import { useState,useEffect } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    getTasks();
  }, [])
  

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  }

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`,
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(task)
      });
    
    const data = await res.json();
    setTasks([...tasks, data]);
    // const arr = tasks;
    // let id = arr.length>0? arr[arr.length - 1].id + 1:1;
    // const newTask = { id, ...task };
    // console.log(newTask);
    // setTasks(x => {
    //   let [...a] = tasks;
    //   a.push(newTask)
    //   return a;
    // });
  }

  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`,
      { method: 'DELETE' }
    );

    setTasks((x) => {
      let prevState = x;
      let newState = prevState.filter(x => x.id !== id);
      return newState;
    })
  }

  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(updateTask)
      })
    
     await res.json();

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
      <Header
        onAdd={() => { setShowAddTask(!showAddTask) }}
        showAdd={showAddTask}
       />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length === 0 ?
        "No tasks" :
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      }
    </div>
  );
}


export default App;
