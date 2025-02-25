const Home = () => {
  let name = "mario";

  const handleClick = () => {
    name = "luigi";
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;





import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("luigi");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
