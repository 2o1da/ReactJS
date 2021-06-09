import React from "react";

function List({ 할일 }) {
  const toDoList = 할일.map(e => <li>{e}</li>);

  return <ul>{toDoList}</ul>;
}

export default List;
