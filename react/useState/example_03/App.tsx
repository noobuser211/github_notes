import { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  return (
    <>
      <button>-</button>
      <span>{count}</span>
      <button>+</button>
    </>
  );
}

export default App;

-> It sets the initial value to 4.





import { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </>
  );
}

export default App;

-> It decrements the count.





import { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount(count - 1);
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </>
  );
}

export default App;

-> Even though we are decrementing two time, the value is decremented only once.





import { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </>
  );
}

export default App;

-> Using this method, the previous value of count is passed to the function both times which
   makes it decrement by two.





import { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

-> The buttons increment and decrement the values by one.





import { useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    console.log("run function");
    return 4;
  });

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

-> It runs the function only the very first time the components renders.





import { useState } from "react";

function countInitial() {
  console.log("run function");
  return 4;
}

function App() {
  const [count, setCount] = useState(countInitial());

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

-> Now everytime the button is clicked, the "run function" get logged (twice).





import { useState } from "react";

function countInitial() {
  console.log("run function");
  return 7;
}

function App() {
  const [count, setCount] = useState(() => countInitial());

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

-> When we pass the function to useState() "a function that calls countInitial()", it gets run only once.





import { useState } from "react";

function App() {
  const [state, setState] = useState({
    count: 4,
    theme: "blue",
  });
  const count = state.count;
  const theme = state.theme;

  return (
    <>
      <button>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button>+</button>
    </>
  );
}

export default App;

-> It renders "- 4blue +".





import { useState } from "react";

function App() {
  const [state, setState] = useState({
    count: 4,
    theme: "blue",
  });
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  function incrementCount() {
    setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

-> The moment the buttons are clicked, 'blue' disappears from the screen because it gets overwritten
   by the updated value (which is the count).





import { useState } from "react";

function App() {
  const [state, setState] = useState({
    count: 4,
    theme: "blue",
  });
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    });
  }

  function incrementCount() {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

-> It updates the object with the old values as well.
   This way the old values are kept and new value is updated.





import { useState } from "react";

function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

-> We use the 'count' and 'theme' in two different states.





import { useState } from "react";

function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

-> Incrementing the value changes the text to 'red'.

