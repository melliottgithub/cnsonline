import React, { Fragment, useState, useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

import { auth } from "./components/Firebase";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
  NavLink,
  FormGroup,
  Input,
  Modal,
  Form,
} from "reactstrap";
// core components

function CnsNavbar(props) {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [bodyClick, setBodyClick] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);

  // Valid inputs
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123123");
  const [error, setError] = useState(null);
  // const [logging, setLogging] = useState(true);

  // modals states

  const [login, setLogin] = useState(false);

  const logout = () => {
    auth.signOut().then(() => {
      props.history.push("/");
    });
  };

  const loginData = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      // console.log("Enter Email");
      setError("Enter Email");
      return;
    }
    if (!password.trim()) {
      // console.log("Enter Password");
      setError("Enter Password");

      return;
    }
    if (password.length < 6) {
      // console.log("Enter 6 characters or more");
      setError("Enter 6 characters or more");

      return;
    }
    console.log("It is right...");

    setError(null);
  };

  const logging = useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log(res.user);

      setEmail("");
      setPassword("");
      setError(null);

      props.history.push("/classes");
      setLogin(false);
    } catch (error) {
      setError(error.message);
    }
  }, [email, password, props.history]);

  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Fragment>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        expand="lg"
        id="navbar-main"
        color="transparent"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              href="/home"
              // href={window.location.replace("https://www.coloradonewstyle.com")}
            >
              Colorado <span style={{ color: "#FF4C40" }}>New</span> Style
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Colorado <span style={{ color: "#FF4C40" }}>New</span> Style
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="" color="default" caret nav>
                  Classes
                </DropdownToggle>
                {props.fuser === null?(<DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/salsa" tag={Link}>
                    Salsa
                  </DropdownItem>
                  <DropdownItem to="/bachata" tag={Link}>
                    Bachata
                  </DropdownItem>
                </DropdownMenu>):(<DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/salsaonline" tag={Link}>
                    Salsa
                  </DropdownItem>
                  <DropdownItem to="/bachataonline" tag={Link}>
                    Bachata
                  </DropdownItem>
                </DropdownMenu>)}
              </UncontrolledDropdown>
              <NavItem className="mr-5 ml-0">
                <NavLink to="/contact" tag={Link}>
                  Contact
                </NavLink>
              </NavItem>
              {props.fuser === null ? (
                <NavItem>
                  <Button
                    className="btn-sm"
                    color="dark"
                    to="/subscribe"
                    tag={Link}
                  >
                    Subscribe
                  </Button>
                </NavItem>
              ) : null}
              <NavItem>
                {props.fuser !== null ? (
                  <Button
                    className="btn-sm"
                    color="dark"
                    type="button"
                    // to="/"
                    // tag={Link}
                    onClick={() => logout()}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    className="btn-sm"
                    color="dark"
                    type="button"
                    to="/bachata"
                    tag={Link}
                    onClick={() => setLogin(true)}
                  >
                    Login
                  </Button>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        isOpen={login}
        toggle={() => setLogin(false)}
        className="modal-register"
      >
        <div className="modal-header no-border-header text-center">
          <button
            className="close"
            type="button"
            onClick={() => setLogin(false)}
          >
            <span>×</span>
          </button>
          <h6 className="text-muted">Welcome</h6>
          <h3 className="modal-title text-center">
            {" "}
            Colorado <span style={{ color: "#FF4C40" }}>New</span> Style
          </h3>
          <p>Log in to your account</p>
        </div>
        <div className="modal-body">
          <Form onSubmit={loginData}>
            <FormGroup>
              {error && <div className="alert alert-danger">{error}</div>}

              <label>Email</label>
              <Input
                value={email}
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label>Password</label>
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FormGroup>
            <Button
              block
              className="btn"
              color="default"
              type="submit"
              onClick={logging}
            >
              Log in
            </Button>
          </Form>
        </div>
        <div className="modal-footer no-border-footer">
          <span className="text-muted text-center text-dark font-weight-bolder">
            Looking to{" "}
            <Button
              className="btn btn-sm btn-outline-danger"
              to="/subscribe"
              tag={Link}
              onClick={() => setLogin(false)}
            >
              create an account
            </Button>{" "}
            ?
          </span>
        </div>
      </Modal>
    </Fragment>
  );
}

export default withRouter(CnsNavbar);
