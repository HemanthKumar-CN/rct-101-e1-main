import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({tasks,setTasks}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [query, setQuery] = React.useState("");

  const handleAdd=()=> {
    const payload={
      id:Date.now(),
      text:query,
      done:false,
      count:1,
    }
    // console.log(payload.text)
    let co=0;
   tasks.map(one=> {
    //  console.log(one.text)

     if(one.text==payload.text)
     {
       co++;
     }
   })

  //  console.log(co)
   if(co==0 && payload.text!="")
   {
    let newTask=[...tasks,payload];
    setTasks(newTask)
   }

    
    setQuery("")
  }


  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={query} onChange={(e)=> setQuery(e.target.value)} />
      <button data-cy="add-task-button" onClick={handleAdd}>+</button>

      

    </div>
  );
};

export default AddTask;
