import CounterStyles from "../Styles/Counter.module.css";
import { useState } from "react";
import Button from "./Button";
const Counter = () => {
  // Tengo que usar un use state para poder modificar elementos de manera dinamica
//   let counter = 0;
    const [counter,setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter+1)
  };
  const restar = () => {
    setCounter(counter-1)
  };
  return (
    <div className={CounterStyles.counterContainer}>
      {/* ojito de no dejar la funicon asi sumar() porque se va a ejecutar apenas se renderice el dom */}
      <Button onClick={sumar}>+</Button>
      <h4>{counter}</h4>
      <Button onClick={restar} dis={counter<=0 ? true: false}>-</Button>
    </div>
  );
};

export default Counter;
