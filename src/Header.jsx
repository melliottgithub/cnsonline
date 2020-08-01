import React from "react";

// reactstrap components
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

// core components

function Header() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
          'URL(https://images.unsplash.com/photo-1481841580057-e2b9927a05c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)'
            // "url(" + require("assets/img/sections/uriel-soberanes.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <div className="motto">
            <h1 className="title-uppercase text-center">Online classes</h1>
            <h3 className="text-center mb-3">Start learning from the comfort of everywhere</h3>
            <Button
              className="btn-sm"
              color="danger"
              to="/contact"
              tag={Link}
              // onClick={(e) => e.preventDefault()}
              size="lg"
            >
              <i className="fa fa-share-alt mr-1 " />
              learn more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
