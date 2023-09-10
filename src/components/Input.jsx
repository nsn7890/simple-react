import React, { useState } from "react";

const Input = (props) => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="form">
      <input className="input-box"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button className="facebook-button"
        onClick={() => {
          if (inputText.trim() !== "") {
            props.onAdd(inputText);
            setInputText("");
          }
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};





export default Input