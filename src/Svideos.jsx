import React, { Fragment, useEffect } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import { auth } from "./components/Firebase";
import { withRouter } from "react-router";

const img1 =
  "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

function Svideos(props) {
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
  return (
    <Fragment>
      {/* ********* HEADER 1 ********* */}
      <div
        className="page-header page-header-xs"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div />
        <h3 className="title text-center text- text-light content-center">
          Let's improve your <span style={{ color: "#FF4C40" }}>Salsa</span>{" "}
          dancing together!
        </h3>
      </div>
      <div className="header-1">
        <div className="content-center">
          <Container className="mb-5">
            <Col md="12">
              <h2 className="title text-center mt-5 mb-3">
                Beginner-Intermediate-Advanced
              </h2>
              {user && <h3 className="title text-center text-danger mt-0 mb-5">{user.email}</h3>}
            </Col>
            <Row className="mb-8">
              <Col md="4">
                <div className="iframe-container">
                  <iframe
                    title="iframe-container"
                    allowFullScreen=""
                    frameBorder="0"
                    height="250"
                    src="https://www.youtube.com/embed/RcmrbNRK-jY?modestbranding=1&amp;autohide=1&amp;showinfo=0"
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="iframe-container">
                  <iframe
                    title="iframe-container"
                    allowFullScreen=""
                    frameBorder="0"
                    height="250"
                    src="https://www.youtube.com/embed/RcmrbNRK-jY?modestbranding=1&amp;autohide=1&amp;showinfo=0"
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="iframe-container">
                  <iframe
                    title="iframe-container"
                    allowFullScreen=""
                    frameBorder="0"
                    height="250"
                    src="https://www.youtube.com/embed/RcmrbNRK-jY?modestbranding=1&amp;autohide=1&amp;showinfo=0"
                  />
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md="4">
                <div className="iframe-container">
                  <iframe
                    title="iframe-container"
                    allowFullScreen=""
                    frameBorder="0"
                    height="250"
                    src="https://www.youtube.com/embed/RcmrbNRK-jY?modestbranding=1&amp;autohide=1&amp;showinfo=0"
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="iframe-container">
                  <iframe
                    title="iframe-container"
                    allowFullScreen=""
                    frameBorder="0"
                    height="250"
                    src="https://www.youtube.com/embed/RcmrbNRK-jY?modestbranding=1&amp;autohide=1&amp;showinfo=0"
                  />
                </div>
              </Col>
              <Col md="4">
                <div className="iframe-container">
                  <iframe
                    title="iframe-container"
                    allowFullScreen=""
                    frameBorder="0"
                    height="250"
                    src="https://www.youtube.com/embed/RcmrbNRK-jY?modestbranding=1&amp;autohide=1&amp;showinfo=0"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(Svideos);
