/* eslint-diable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [a, b] = useState(["좋아해", "사랑해", "소중해"]);
  let [index,changeIndex] = useState(0);
  let [upNumber, changeUpNumber] = useState([0,0,0]);
  let [modal, changeModal] = useState(false);
  let [input, changeInput] = useState(''); // default

  let title = `박민정`;

  function changeUp(i){
    let temp=[...upNumber];
    temp[i]++;
    changeUpNumber(temp);
  }
  function changeContent(){
    let temp = [...a];
    temp[0] = "I love you";
    b(temp);
  }
  function sortContent(){
    a.sort();
    let temp=[...a];
    b(temp);
  }  
  function forUI(){
    let arr=[];
    
    for(let i=0;i<3;++i){
      arr.push(<div>HELP</div>);
    }

    return arr;
  }
  function addPost(){
    let temp=[...a];
    temp.unshift(input);
    b(temp);
  }

  return (
      <div className="App">
          
          <div className="black-nav">
              <div>Blog</div>
          </div>

          <button onClick={changeContent}>변경</button>
          <button onClick={sortContent}>정렬</button>
          
          {
            a.map((e,i) => {
              return (
                <div className="post-list" key={i}>
                  <h3 onClick={() => {changeIndex(i)}}>
                    {title}
                    <span onClick={()=>{changeUp(i)}} style={{ marginLeft: "30px", marginRight: "10px", cursor: "pointer" }}>👍</span>
                    {upNumber[i]}
                  </h3>
                  <p>{e}</p>
                  <p>{a[i]}</p>
                  <hr></hr>
                </div>
              );
            })
          }

          <button onClick={() => {changeModal(!modal);}}>MENU</button>
          
          <div className="publish">
            <input onChange={(e)=>{changeInput(e.target.value)}}  />
            <button onClick={()=>{addPost()}}>저장</button>
          </div>

          {
            modal ? <Modal test={a} test2={index}/> : null // innerHTML("");
          }
          
          {forUI()}

      </div>
  );
}

function Modal(props){
  return (
      <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>{props.test[props.test2]}</p>
      </div>
  );
}
// 옛날 react
class Profile extends React.Component{
  constructor(props){
    super();
    this.state={name:'Kim'}
  }

  // arrow function을 쓰면 this.changeName.bind(this) 할 필요 없음
  changeName = () => {
    this.setState({ name: "Park" });
  }
  //useState의 변경함수는 원본을 대체하지만 setState는 일부만 수정 가능
  render(){
    return(
      <div>
        <h3>이름:{this.state.name}</h3>
        <button onClick={()=>{ this.changeName.bind(this) }}></button>
      </div>
    )
  }
}

export default App;
