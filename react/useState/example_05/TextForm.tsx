import { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleUpChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here...");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleUpChange}
          id="myBox"
          rows={10}
          cols={100}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
    </div>
  );
}

export default TextForm;
