import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

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

  return (
    <div className="container">
      <박스>
        <제목 색상={"red"}>Detail</제목>
      </박스>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%"></img>
        </div>
        <div className="col-md-6 mt-4">
          <h3 className="pt-5">{props.shoes[id].title}</h3>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
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

export default Detail;
