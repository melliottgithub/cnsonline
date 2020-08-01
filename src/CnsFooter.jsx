/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CnsFooter() {
  return (
    <>
      <footer className="footer footer-black footer-white">
        <Container>
          <Row className='text-center'>
            <Col lg='4'>
              <nav className="footer-nav">
                <ul>
                  <li>
                    <a
                      href="https://www.coloradonewstyle.com"
                      target="_blank"
                      className="mr-1"
                    >
                      Colorado <span style={{ color: "#FF4C40" }}>New</span> Style
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>
            
            <Col lg='4'>
              <div className="credits ml-auto">
                <span className="copyright">
                  © 2020 - {new Date().getFullYear()} All Rights Reserved - C
                  <span style={{ color: "#FF4C40" }}>N</span>S
                </span>
              </div>
            </Col>
            <Col lg='4'>
              <div className='credits'>
                <span className='copyright'>Build by M.E.</span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default CnsFooter;
