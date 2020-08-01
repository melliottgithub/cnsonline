import React, { Fragment, useEffect } from "react";
import { auth } from "./components/Firebase";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import {
  CardBody,
  Card,
  Col,
  Container,
  Row,
  Button,
  CardFooter,
  FormGroup,
  Input,
  Modal,
} from "reactstrap";

const Classes = (props) => {
  const [login, setLogin] = React.useState(false);
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      console.log("User found");
      setUser(auth.currentUser);
    } else {
      console.log("User not found");
      props.history.push("/");
    }
  }, [props.history]);

  const img1 =
    "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

  return (
    <Fragment>
      <div
        className="page-header page-header-xs"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div />
       
        <h3 className="title text-center text-light content-center">
          Let's improve your <span style={{ color: "#FF4C40" }}>Dancing</span>{" "}
          together!
        </h3>
      </div>
      <div className="features-2">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="12">
              {user && <h3 className="title text-center text-danger mt-0 mb-4">{user.email}</h3>}
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              {/* <h2 className="title">Salsa</h2> */}
              {/* <h5 className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum vitae explicabo accusantium autem dolores laboriosam necessitatibus a.
              </h5> */}
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                className=""
                data-background="image"
                style={{
                  backgroundImage: `url(${img1})`,
                }}
              >
                <Button
                  className="btn-neutral"
                  color="link"
                  to="/bachataonline"
                  tag={Link}
                >
                  <CardBody>
                    <h6 className="card-category">Bachata</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-button-play" />
                    </div>
                    <p className="card-description">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nisi, ipsum?
                    </p>
                    <CardFooter>
                      <i className="fa fa-book mr-1" />
                      Show more
                    </CardFooter>
                  </CardBody>
                </Button>
              </Card>
            </Col>
            <Col>
              <Card
                className=""
                data-background="image"
                style={{
                  backgroundImage: `url(${img1})`,
                }}
              >
                <Button
                  className="btn-neutral"
                  color="link"
                  to="/salsaonline"
                  tag={Link}
                >
                  <CardBody>
                    <h6 className="card-category">Salsa</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-button-play" />
                    </div>
                    <p className="card-description">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nisi, ipsum?
                    </p>
                    <CardFooter>
                      <i className="fa fa-book mr-1" />
                      Show more
                    </CardFooter>
                  </CardBody>
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ********* Modal ********* */}
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
          <FormGroup>
            <label>Email</label>
            <Input defaultValue="" placeholder="Email" type="text" />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <Input defaultValue="" placeholder="Password" type="password" />
          </FormGroup>
          <Button block className="btn" color="default">
            Log in
          </Button>
        </div>
        <div className="modal-footer no-border-footer">
          <span className="text-muted text-center text-dark font-weight-bolder">
            Looking to{" "}
            <Button
              className="btn btn-sm btn-outline-danger"
              onClick={() => setLogin(false)}
              to="/subscribe"
              tag={Link}
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

export default withRouter(Classes);
