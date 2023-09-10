import React, { useState } from "react"
import Input from './Input'
import ListItem from "./Listitem.jsx"
import "../App.css"




function App() {
  const [items, setItems] = useState([]);

  const addItem = (inputText) => {
    if (inputText.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputText]);
    }
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== id));
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do</h1>
      </div>
      <div className="body-container">
      <Input className="input-box" onAdd={addItem} />
      <div>
        <ul className="todo-container">
          {items.map((todoItem, index) => (
            <ListItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
}


export default App