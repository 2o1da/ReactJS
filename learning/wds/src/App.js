import React, { useState, useEffect } from "react";
import "./App.css";

// function App() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   console.log("render-app");
//   useEffect(() => {
//     console.log("render-resize");
//     window.addEventListener("resize", handleResize);
//     return () => {
//       console.log("clean-up-resize");
//     };
//   });

//   function handleResize() {
//     setWindowWidth(window.innerWidth);
//   }
//   useEffect(() => {
//     console.log("유즈이펙트");
//     window.addEventListener("resize", handleResize);
//   });

//   return (
//     <div className="App">
//       <div>{windowWidth}</div>
//       <div id="title">타이틀</div>
//       <button onClick={() => console.log("이것이 온클릭")}>버튼</button>
//     </div>
//   );
// }

// export default App;

// export default function App() {
//   const [resourceType, setResourceType] = useState("");
//   const [items, setItems] = useState([]);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [count, setCount] = useState(0);

//   function handleResize() {
//     setWindowWidth(window.innerWidth);
//   }

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     console.log("resize-effect");
//   }, [windowWidth]);

//   useEffect(() => {
//     console.log("fetch-effect");

//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then(response => response.json())
//       .then(json => setItems(json));

//     return () => {
//       console.log("clean-up-fetch");
//     };
//   }, [resourceType]);

//   return (
//     <>
//       <h1>{windowWidth}</h1>
//       <h2>{count}</h2>
//       <div>
//         <button onClick={() => setResourceType("posts")}>Posts</button>
//         <button onClick={() => setResourceType("users")}>Users</button>
//         <button onClick={() => setResourceType("comments")}>Comments</button>
//         <button onClick={() => setCount(count + 1)}>Count</button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map(e => {
//         return <pre>{JSON.stringify(e)}</pre>;
//       })}
//     </>
//   );
// }

import List from "./List";

function App() {
  const [toDos, setToDos] = useState(["초기값"]);
  const [input, setInput] = useState("");

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  function changeInput(e) {
    setInput(e.target.value);
  }

  const addToDo = e => {
    let temp = [...toDos, input];
    setToDos(temp);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>
        {count} {count2}
      </h1>

      <input
        type="text"
        name=""
        onChange={e => {
          setInput(e.target.value);
        }}
      />

      <button onClick={addToDo}>Add</button>
      <button onClick={() => inc()}>Up</button>
      <button onClick={() => setCount2(count2 + 2)}>Update</button>

      <List 할일={toDos} />
    </div>
  );
}

export default App;
