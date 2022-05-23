import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

let arr=[];
const Task = ({text,count,id,handleDelete,done,setTasks,tasks}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [check, setCheck] = React.useState(done)
  // let check=done;
   
  // console.log("check",check)
  
  const handlecheck=(id)=> {
    console.log(id)

    
  }
  
const handleChange=(e)=> {
  setCheck(e.target.checked)

  
  

}
// console.log(arr,arr.length+2)


  return (
    <li data-cy="task" className={styles.task}>
      <input checked={check} type="checkbox" data-cy="task-checkbox" onClick={()=>handlecheck(id) } onChange={handleChange} />
      <div data-cy="task-text">{text}</div>
      {/* Counter here */}
      <Counter count={count}/>
      <button data-cy="task-remove-button" onClick={()=>handleDelete(id)}>Delete</button>
    </li>
  );
};

export default Task;
