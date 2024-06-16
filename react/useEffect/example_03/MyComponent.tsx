import { useState, useEffect } from "react";

function MyComponent() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert("I am clicked!");
  });

  return (
    <button
      onClick={() => {
        setNum(num + 1);
      }}
    >
      CLICK ME
    </button>
  );
}

export default MyComponent;

-> Everytime the button is clicked, an alert box is popped.





import { useState, useEffect } from "react";

function MyComponent() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I am clicked!");
  });

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        CLICK ME
      </button>
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        CLICK ME
      </button>
    </>
  );
}

export default MyComponent;

-> Regardless of which button is clicked, the alert box is popped.





import { useState, useEffect } from "react";

function MyComponent() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I am clicked!");
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        CLICK ME
      </button>
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        CLICK ME
      </button>
    </>
  );
}

export default MyComponent;

-> Using an empty conditional, the alert pops only when the page is loaded.





import { useState, useEffect } from "react";

function MyComponent() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I am clicked!");
  }, [num]);

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        CLICK ME
      </button>
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        CLICK ME
      </button>
    </>
  );
}

export default MyComponent;

-> Everytime the first button is clicked, the alert box is popped.

