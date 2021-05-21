import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./detail.scss";

let 박스 = styled.div`
  padding: 30px;
`;
let 제목 = styled.h3`
  font-size: 33px;
  color: ${props => props.색상};
`;

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let found = props.shoes.find(x => x.id == id);

  let [alert, changeAlert] = useState(true);
  let [input, changeInput] = useState("");

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
      <박스>
        <제목 색상={"red"}>Detail</제목>
        <제목 className="red">Detail</제목>
      </박스>

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
    </div>
  );
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
