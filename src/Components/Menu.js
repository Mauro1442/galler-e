import { Navbar, NavDropdown, Nav, Form, Button } from "react-bootstrap";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import {  Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Menu.css";

export default function Menu(props) {
  const { login } = props;

  const {
    handleSubmit,
  } = useForm();

  return (
    <AuthContext.Consumer>
      {(context) => (
        <>
        <a href="https://wa.me/+4915739628651"   
        target="_blank"
        rel="noreferrer"
         style={{
      display: "inline-flex",
        position: "fixed",
  bottom: "25px",
  right: "25px", zIndex: "2"
      }}
        >      <img 
        src="../wplogo.png"
        style={{
        width: "50px", height: "auto", 
      }}
        id="fixedbutton"
        alt="whatsapp"
        
      ></img></a>
  
        <Navbar className="nbar" bg="light" expand="lg" sticky="top">
          <Container className="cont">
            <Navbar.Brand as={Link} to="/">
              <img
                alt=""
                src="../audiax logo.png"
                width="150"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>

                {!context.userLogin && (
                  <>
                    <Nav.Link as={Link} to="/log">
                      Log In
                    </Nav.Link>
                    <Nav.Link as={Link} to="/sign">
                      Sign Up
                    </Nav.Link>
                  </>
                )}

                {context.userLogin && (
                  <>
                  <Nav.Link onClick={context.logOutUser}>Log Out</Nav.Link>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/add">
                        Add Item
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/delete">
                        Delete Item
                      </NavDropdown.Item>
                      <NavDropdown.Item href="mailto:mauro_di86@hotmail.com">
                        Contact
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="https://maurodirosa.netlify.app/">
                        About
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                )}
              </Nav>
              <Form className="d-flex" 
      
              >
               
                <Form.Control
                  type="search"
                /*  placeholder="Search" */
                  className="me-2"
                  aria-label="Search"

                />
                <Button variant="outline-dark" as={Link} to="/">
                  Search
                </Button>
              </Form>
              <a href="mailto:mauro_di86@hotmail.com"   
        >      <img 
        src="../mail.png"
        style={{
        width: "30px", height: "auto", marginLeft: "20px", marginRight:"20px", marginTop: "4px"
      }}
        id="fixedbutton"
        alt="whatsapp"
        
      ></img></a>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      )}
    </AuthContext.Consumer>
  );
}
