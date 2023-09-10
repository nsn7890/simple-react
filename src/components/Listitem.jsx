import React from "react";

const ListItem = ({ id, text, onChecked }) => (
  <div className="list-item"  onClick={() => onChecked(id)}>
    <li className="">{text}</li>
  </div>
);

export default ListItem;