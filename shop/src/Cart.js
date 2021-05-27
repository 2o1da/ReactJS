import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {props.states.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.quantity}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.dispatch({ type: "수량증가" });
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        props.dispatch({ type: "수량감소" });
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {props.alert열렸니 === true ? (
          <div className="my-alert2">
            <p>지금 구매하시면 신규 할인 20%</p>
            <button
              className="close"
              onClick={() => {
                props.dispatch({ type: "alert닫기" });
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function state를props로(state) {
  return {
    states: state,
    //상품명: state[1].name,
  };
}

export default connect(state를props로)(Cart);

//export default Cart;
