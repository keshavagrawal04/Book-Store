import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { bookStoreImg } from "../../assets";

const Header = () => {
  const profileImage = localStorage.getItem("profileImage");
  console.log(profileImage);
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#fff", zIndex: "1" }}
      className="position-sticky w-100 top-0 border"
    >
      <Container>
        <Link to="/" className="fs-2">
          <img src={bookStoreImg} width={150} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <BiMenu size={30} />
        </Navbar.Toggle>
        <Navbar.Collapse style={{ zIndex: "2" }} id="basic-navbar-nav">
          <Nav className="ms-auto fs-5 d-flex gap-4 justify-content-center mb-0">
            <NavLink to="/" className="text-decoration-none text-dark">
              Home
            </NavLink>
            <NavLink to="/books" className="text-decoration-none text-dark">
              Books
            </NavLink>
          </Nav>
          <Nav className="ms-auto fs-5 d-flex gap-1 justify-content-center mb-0">
            <NavLink
              to="/cart"
              className="btn text-light btn-md fs-6 fw-bold"
              style={{ backgroundColor: "#4475ad" }}
            >
              <FaCartShopping size={16} />
            </NavLink>
            <NavLink
              to="/orders"
              className="btn text-light btn-md fs-6 fw-bold"
              style={{ backgroundColor: "#4475ad" }}
            >
              <FaBoxOpen size={16} />
            </NavLink>
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
            {profileImage ? (
              <img
                src={profileImage}
                alt="profileImage"
                className="rounded-circle"
                style={{ height: "40px", width: "40px" }}
              />
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
