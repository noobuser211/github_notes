import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run.
    console.log("The count is: ", count);
  });

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;

-> Everytime the button is pressed, the value gets incremented/decremented on the page
   and it gets logged into the console.





import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run.
    console.log("The count is: ", count);
  }, []); // The dependency array

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;

-> The code doesn't get logged because the dependency array is empty.





import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run.
    console.log("The count is: ", count);
  }, [count]); // The dependency array

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;

-> If we put the 'count' in the dependency array, the output gets logged.





import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run.
    console.log("The count is: ", count);

    // Optional return function
    return () => {
      console.log("I am being cleaned up!");
    };
  }, [count]); // The dependency array

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;

-> What happens is that if the dependency array changes, the useEffect hook will destory itself and
   it will run the cleanup function and then it is going to be recreated with the new value.
   e.g. "I am being clearned up." and then "The count is: 1"
