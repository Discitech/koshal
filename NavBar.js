import React from "react";
import "../css/Navbar.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

class NavBar1 extends React.Component {
  state = {
    color: "scroll",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 66) {
      this.setState({ color: "scrolled" });
    } else {
      this.setState({ color: "scroll" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top" className={this.state.color}>
        <Navbar.Brand href="#home" className="logo-left">
          Digite Tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end right"
        >
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#1">Contact</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Quizzes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Programming Language
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="ml-auto">
              <Button className="ml-3 mr-2" variant="outline-success">
                Log In
              </Button>
              <Button variant="outline-success">Sign Up</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar1;
