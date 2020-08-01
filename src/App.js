import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./components/Firebase";

import CnsNavbar from "./CnsNavbar";
import CnsFooter from "./CnsFooter";
import Header from "./Header";
import Contact from "./Contact";
import Bachata from "./Bachata";
import Salsa from "./Salsa";
import RegisterTrial from "./RegisterTrial";
import Classes from "./Classes";
import Svideos from "./Svideos";
import Bvideos from "./Bvideos";

function App() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-post");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
    };
  });

  const [fuser, setFuser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setFuser(user);
      } else {
        setFuser(null);
      }
    });
  }, []);

  return fuser !== false ? (
    <Fragment>
      <CnsNavbar fuser={fuser} />
      <Switch>
        <Route path="/bachata">
          <Bachata />
        </Route>
        <Route path="/classes">
          <Classes />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/salsa">
          <Salsa />
        </Route>
        <Route path="/subscribe">
          <RegisterTrial />
        </Route>
        <Route path="/salsaonline">
          <Svideos />
        </Route>
        <Route path="/bachataonline">
          <Bvideos />
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
      <CnsFooter />
    </Fragment>
  ) : (
    <div>loading......</div>
  );
}

export default App;
