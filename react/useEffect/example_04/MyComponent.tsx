import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log("User updated count ", counter);

    return () => {
      console.log("Counter UseEffect Return", counter);
    };
  }, [counter]);

  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <h1>{counter}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;

-> Counter UseEffect Return 0
-> User updated count 1
-> Counter UseEffectReturn 1
-> User updated counter 2

