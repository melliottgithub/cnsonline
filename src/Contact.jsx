import React, { Fragment } from "react";
// react plugin used to create google maps

// reactstrap components
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

function Contact() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
  return (
    <Fragment>
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1474308305481-198184645d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)",
            // "url(" + require("assets/img/sections/bruno-abatti.jpg") + ")",
          }}
        >
          {/* <div className="main "> */}
          <div className="filter-black">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center text-light mt-5 mb-0" md="0">
                
                  <h2 className="title text-light mb-0">Get in touch with us</h2>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, in a odio similique illo reiciendis repellendus
                    error neque deserunt aliquam!
                  </p> */}
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center mt-0" md="6">
                  <h3 className="title">
                    <small className="text-light">
                      Find us on social networks
                    </small>
                  </h3>
                  {/* <Button className="btn-just-icon mr-1" color="twitter">
                    <i className="fa fa-twitter" />
                  </Button> */}
                  <Button className="btn-just-icon mr-1" color="facebook" href='https://www.facebook.com/Coloradonewstyle/' target='_blank'>
                    <i className="fa fa-facebook" />
                  </Button>
                  {/* <Button className="btn-just-icon mr-1" color="google">
                    <i className="fa fa-google" />
                  </Button> */}
                  {/* <Button className="btn-just-icon mr-1" color="dribbble">
                  <i className="fa fa-dribbble" />
                </Button> */}
                  <Button className="btn-just-icon mr-1" color="dribbble" href='https://www.instagram.com/newstylecolorado/' target='_blank'>
                    <i className="fa fa-instagram" />
                  </Button>
                  <Button className="btn-just-icon" color="youtube" href='https://www.youtube.com/coloradonewstyle' target='_blank'>
                    <i className="fa fa-youtube" />
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h3 className="title">
                    <small className="text-light">Or drop us a note</small>
                  </h3>
                  <Form className="contact">
                    <Row>
                      <Col md="6">
                        <Input placeholder="First Name" type="text" />
                      </Col>
                      <Col md="6">
                        <Input placeholder="Last Name" type="text" />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <Input placeholder="Email" type="text" />
                      </Col>
                      <Col md="6">
                        <Input placeholder="Subject" type="text" />
                      </Col>
                    </Row>
                    <Input placeholder="Message" rows="7" type="textarea" />
                    <Row  className='mb-5'>
                      <Col className="ml-auto mr-auto" md="8">
                        <Button block className="btn-sm md-8" color="danger">
                          Send
                        </Button>
                      </Col>
                      
                    </Row>
                  </Form>
                  {/* <h3 className="visit">
                  <small>Or come and visit</small>
                </h3> */}
                </Col>
                
              </Row>
               
            </Container>
             <br/>
          </div>
        </div>
        {/* <div className="big-map" id="contactUsMap">
        <MapWrapper
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>{" "} */}
      </div>
      {/* </div> */}
    </Fragment>
  );
}

export default Contact;
