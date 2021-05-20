/* eslint-diable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [a, b] = useState(["사랑해", "좋아해", "소중해"]);
  let [x, b] = useState(0);
  // b(); //b(대체할 데이터)
  let post = `박민정`;

  return (
    <div className="App">
      <div className="black-nav">
        <div>Blog</div>
      </div>
      <div className="post-list">
        <h3>
          {post}
          <span onClick={() => {b(x++)}}>👍</span>
          {x}
        </h3>
        <h3>
          {post}
          <span onClick="">👍</span>
        </h3>
        <p>{a[0]}</p>
        <hr></hr>
        <h3>{post}</h3>
        <p>{a[1]}</p>
        <hr></hr>
        <h3>{post}</h3>
        <p>{a[2]}</p>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
