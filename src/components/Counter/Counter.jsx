import React from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair

  const [counter, setCounter] = React.useState(count)

  const handleIncrement=()=> {
    setCounter(counter+1)
  }

  const handleDecrement=()=> {
    if(counter>0)
    {
      setCounter(counter-1)
    }
  }

  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleIncrement}>+</button>
      <span data-cy="task-counter-value">{counter}</span>
      <button data-cy="task-counter-decrement-button" onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
