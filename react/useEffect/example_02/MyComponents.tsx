import { useState, useEffect } from "react";

function MyComponent() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("render");
  });

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default MyComponent;

-> Everytime a new button is clicked, the console log is updated.





import { useState, useEffect } from "react";

function MyComponent() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("render");
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default MyComponent;

-> Everytime the resource type is changed, the console log is generated.





import { useState, useEffect } from "react";

function MyComponent() {
  const [resourceType, setResourceType] = useState("posts");

  console.log("rendered");

  useEffect(() => {
    console.log("resource type changed");
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default MyComponent;

-> "resource type changed" gets logged in the console whenever the resourceType is changed.
-> If the same button is pressed twice, then "render" gets logged again.
-> But if the same button is pressed the third time, nothings gets logged.





import { useState, useEffect } from "react";

function MyComponent() {
  const [resourceType, setResourceType] = useState("posts");

  console.log("rendered");

  useEffect(() => {
    console.log("onMount");
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default MyComponent;

-> If the array is empty, then the "onMount" runs on initial load and never again because
   the empty array doesn't change between different renders.





import { useState, useEffect } from "react";

function MyComponent() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("resource changed");

    return () => {
      console.log("return from resource change");
    };
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default MyComponent;

-> Everytime a component is clicked, the cleanup code runs first.
   First "return from resource change" and then "resource changed".




import { useState, useEffect } from "react";

function MyComponent() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default MyComponent;

-> By default it prints 'posts' which includes 100 items.
-> If 'users' or 'comments' is clicked, then the users or comments are returned.
-> Clicking the same item twice won't retrieve the results a second time.





import { useState, useEffect } from "react";

function MyComponent() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default MyComponent;

-> It prints the results on the screen.





import { useState, useEffect } from "react";

function MyComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return <div>{windowWidth}</div>;
}

export default MyComponent;

-> It doesn't update the window width.





import { useState, useEffect } from "react";

function MyComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return <div>{windowWidth}</div>;
}

export default MyComponent;

-> It updates the window size.





import { useState, useEffect } from "react";

function MyComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}

export default MyComponent;

-> It removes the event listener first before adding the event listener.

