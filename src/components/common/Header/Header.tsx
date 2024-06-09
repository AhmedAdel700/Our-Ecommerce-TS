import { HeaderBasket } from "..";
import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// React Router
import { NavLink } from "react-router-dom";

// Styles CSS
import styles from "./styles.module.css";

const { headerContainer, headerLogo, userNone, LinkRest } = styles;

export default function Header() {
  return (
    <header>
      <div className={headerContainer}>
        <NavLink className={LinkRest} to="/">
          <h1 className={headerLogo}>
            <span>Our</span> <Badge bg="info">E-com</Badge>
          </h1>
        </NavLink>

        <HeaderBasket />
      </div>

      <div className={userNone}>
        <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">
                  {/* as => When You Render Work As NavLink From REact Router */}
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="categories">
                  Categories
                </Nav.Link>
                <Nav.Link as={NavLink} to="about">
                  About
                </Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link as={NavLink} to="login">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="register">
                  Register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
