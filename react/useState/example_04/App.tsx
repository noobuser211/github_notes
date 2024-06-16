import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("Ajay");

  return (
    <div>
      <input type="text" value={inputValue} />
    </div>
  );
}

export default App;

-> It puts "Ajay" in the input box.





import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("Media");

  const onChange = (event) => {
    const newVal = event.target.value;
    setInputValue(newVal);
  };

  return (
    <div>
      <h1>{inputValue}</h1>
      <input
        type="text"
        placeholder="Type something here..."
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
}

export default App;

-> It takes the value from the input field and update the "value" of the input tag and
   also the <h1> element.





import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const updateState = () => {
    setCounter(counter + 1);
  };

  return <h1 onMouseOver={updateState}>{counter}</h1>;
}

export default App;

-> Every time the mouse hovers over the element, the coounter is incremented by one.

