import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({tasks,handleDelete,setTasks}) => {
  // NOTE: do not delete `data-cy` key value pair

  console.log(tasks)
  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {
          tasks.map(taskList=> {
            return(<div key={taskList.id}>{}<Task tasks={tasks} setTasks={setTasks} count={taskList.count} text={taskList.text} id={taskList.id} handleDelete={handleDelete} done={taskList.done} />
            
            </div>)
          })
        }
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
