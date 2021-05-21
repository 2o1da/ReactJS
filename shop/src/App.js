import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Jumbotron } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./data.js";
import DDetail from "./detail.js";
import axios from "axios";
import "./detail.scss";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, changeShoes] = useState(data);
  let [loading, changeLoading] = useState(false);
  let [stock, changeStock] = useState([32, 56, 21]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Shoes Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail/0">Detail</Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route exact path="/">
        <Jumbotron className="background">
          <h1>20% Season-off</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div className="container">
          <div className="row">
            {shoes.map((e, i) => {
              return <Product shoes={e} index={i} key={i} />; // shoes[i]
            })}
          </div>

          {loading === true ? (
            <div className="my-alert-skyblue">
              <p>로딩중</p>
            </div>
          ) : null}

          <button
            onClick={() => {
              //axios.post("URL", { id: "solda", pw: 123 });
              changeLoading(true);
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then(result => {
                  console.log("성공!");
                  changeLoading(false);
                  /*
                  let temp = [...shoes];
                  result.data.map(el => {
                    temp.push(el);
                  });
                  changeShoes(temp);
                  */
                  changeShoes([...shoes, ...result.data]);
                })
                .catch(() => {
                  console.log("실패!");
                  changeLoading(false);
                });
            }}
          >
            더 보기
          </button>
        </div>
      </Route>

      <Route path="/detail/:id">
        <DDetail shoes={shoes} stock={stock} changeStock={changeStock} />
      </Route>

      <Route path="/:id">이것이 /:id다.</Route>
      {/* {<Route path="/a" component={Product}></Route>} */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="col-md-4">
      <img width="100%" src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`} />
      <h3>{props.shoes.title}</h3>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
