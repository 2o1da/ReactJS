import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Jumbotron } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./data.js";
import DDetail from "./detail.js";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, changeShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">Detail</Link>
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
        <div>메인페이지</div>
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
              return <Product shoes={e} index={i} />; // shoes[i]
            })}
          </div>
        </div>
      </Route>
      <Route path="/detail/:id">
        <DDetail shoes={shoes} />
      </Route>

      <Route path="/:id"></Route>
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
