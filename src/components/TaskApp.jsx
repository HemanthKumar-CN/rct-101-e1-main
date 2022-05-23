import React from "react";

import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";
import data from "../data/tasks.json"

// console.log(data)

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [tasks, setTasks] = React.useState(data)

  const handleDelete=(id)=> {
    let newTask=tasks.filter(item=> item.id !=id);
    setTasks(newTask)
  }
  // let ans=1;
  const [num, setNum] = React.useState(0)

  // console.log(num)
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <h1>Todo List</h1>
      <TaskHeader num={num} tasks={tasks}/>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <Tasks setTasks={setTasks} tasks={tasks} handleDelete={handleDelete}/>

      

      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
