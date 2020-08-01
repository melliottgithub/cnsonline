import React, { Fragment, useState, useCallback } from "react";

import { Link, withRouter } from "react-router-dom";

import { auth, db } from "./components/Firebase";

import {
  Button,
  Card,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
  FormGroup,
  Modal,
} from "reactstrap";

const RegisterTrial = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [login, setLogin] = useState(false);

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

  const registerData = (e) => {
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

  const registering = useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      console.log(res);
      await db
        .collection("users")
        .doc(res.user.email)
        .set({ email: res.user.email, uid: res.user.uid });

      setEmail("");
      setPassword("");
      setError(null);

      props.history.push("/classes");
    } catch (error) {
      setError(error.message);
    }
  }, [email, password, props.history]);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("full-screen");
    };
  });

  return (
    <Fragment>
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
            // "url(" + require("assets/img/sections/bruno-abatti.jpg") + ")",
          }}
        >
          <div className="filter-black" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4" md="6" sm="6">
                <Card className="card-register bg-transparent">
                  <CardTitle tag="h3" className="text-light font-weight-bolder">
                    Welcome
                  </CardTitle>
                  <Form className="register-form" onSubmit={registerData}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <label>Email</label>
                    <Input
                      className="no-border"
                      placeholder="Email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <label>Password</label>
                    <Input
                      className="no-border"
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <Button
                      block
                      className="btn-sm"
                      color="danger"
                      type="submit"
                      onClick={registering}
                    >
                      Register
                    </Button>
                    <div className="forgot">
                      <Button
                        className="btn-sm btn-outline-light"
                        color="danger"
                        type="button"
                        onClick={() => setLogin(true)}
                      >
                        Already Have an account?
                      </Button>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
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
};

export default withRouter(RegisterTrial);
