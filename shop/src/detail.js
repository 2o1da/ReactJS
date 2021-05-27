import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./detail.scss";
import { stockContext } from "./App.js";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Jumbotron } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

let 박스 = styled.div`
  padding: 30px;
`;
let 제목 = styled.h3`
  font-size: 33px;
  color: ${props => props.색상};
`;

function Detail(props) {
  let stock = useContext(stockContext);

  let history = useHistory();
  let { id } = useParams();
  let found = props.shoes.find(x => x.id == id);

  let [alert, changeAlert] = useState(true);
  let [input, changeInput] = useState("");

  let [tab, changeTab] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  useEffect(() => {
    let arr = localStorage.getItem("watched");

    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }

    arr.push(id);
    arr = new Set(arr);
    arr = [...arr];

    localStorage.setItem("watced", JSON.stringify(arr));
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      document.querySelector(".my-alert").style.display = "none";
      changeAlert(false);
    }, 2000);

    // Detail component가 사라질 때 실행
    return () => {
      console.log("Detail component is unmount?!");
      clearTimeout(timer);
    };
  }, [alert]);

  return (
    <div className="container">
      <stockContext.Provider value={stock}>
        <박스>
          {stock}
          <제목 색상={"red"}>Detail</제목>
          <제목 className="red">Detail</제목>
        </박스>
      </stockContext.Provider>

      <div className="my-alert">
        <p>재고가 얼마 남지 않았습니다.1</p>
      </div>

      {alert === true ? (
        <div className="my-alert-skyblue">
          <p>재고가 얼마 남지 않았습니다.2</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%"></img>
        </div>
        <div className="col-md-6 mt-4">
          <h3 className="pt-5">{props.shoes[id].title}</h3>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <Stock stock={props.stock}></Stock>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.changeStock([3, 5, 7]);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger ml-3 "
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              changeTab(0);
              스위치변경(false);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              changeTab(1);
              스위치변경(false);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent tab={tab} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.tab === 0) {
    return <div>0번째 탭입니다.</div>;
  } else return <div>1번째 탭입니다.</div>;
}

function Stock(props) {
  return <p>재고 : {props.stock[0]} </p>;
}

class Detail2 extends React.Component {
  // Detail2 component가 Mount 되었을 때
  // Ajax
  componentDidMount() {}

  // Detail2 component가 Unmount 되기 직전에
  componentWillUnmount() {}
}

export default Detail;
