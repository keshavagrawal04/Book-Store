import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { bookStoreImg } from "../../assets";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#fff", zIndex: "1" }}
      className="position-sticky w-100 top-0 border"
    >
      <Container fluid className="mx-5">
        <Link to="/" className="fs-2">
          <img src={bookStoreImg} width={150} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <BiMenu size={30} />
        </Navbar.Toggle>
        <Navbar.Collapse style={{ zIndex: "2" }} id="basic-navbar-nav">
          <Nav className="ms-auto fs-5 d-flex gap-2 justify-content-center gap-4 mb-0">
            <NavLink to="/" className="text-decoration-none text-dark">
              Home
            </NavLink>
            <NavLink to="/books" className="text-decoration-none text-dark">
              Books
            </NavLink>
            <NavLink to="/orders" className="text-decoration-none text-dark">
              Order
            </NavLink>
          </Nav>
          <Nav className="ms-auto fs-5 d-flex gap-1 justify-content-center mb-0">
            <NavLink
              to="/signin"
              style={{ backgroundColor: "#4475ad" }}
              className="btn text-light btn-md fs-6 fw-bold"
            >
              SignIn
            </NavLink>
            <NavLink
              to="/signup"
              style={{ backgroundColor: "#4475ad" }}
              className="btn text-light btn-md fs-6 fw-bold"
            >
              SignUp
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
