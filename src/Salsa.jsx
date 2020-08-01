import React from "react";
import { Fragment } from "react";
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
import { Link } from "react-router-dom";

const Salsa = () => {
  const [login, setLogin] = React.useState(false);

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
          Let's improve your <span style={{ color: "#FF4C40" }}>Salsa</span>{" "}
          dancing together!
        </h3>
      </div>
      <div className="features-2">
        <Container>
          
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
                  onClick={() => setLogin(true)}
                >
                  <CardBody>
                    <h6 className="card-category">Salsa Beginner 1</h6>
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
                  onClick={() => setLogin(true)}
                >
                  <CardBody>
                    <h6 className="card-category">Salsa Beginner 1</h6>
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
                  onClick={() => setLogin(true)}
                >
                  <CardBody>
                    <h6 className="card-category">Salsa Beginner 1</h6>
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
                  onClick={() => setLogin(true)}
                >
                  <CardBody>
                    <h6 className="card-category">Salsa Beginner 1</h6>
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

export default Salsa;
