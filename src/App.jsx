import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import "./styles.css";
import Pg from "./Pg.jsx";
import Baby from "./Baby.jsx";
import Park from "./Park.jsx";
import Laundary from "./Laundary.jsx";
import Stationary from "./Stationary.jsx";
import Medical from "./Medical.jsx";
import Flats from "./Flats.jsx";
import Mess from "./Mess.jsx";
import Library from "./Library.jsx";
import Footer from "./Footer.jsx";
import Login from "./Login";
import LoginGoogle from "./LoginGoogle";
import Fblogin from "./Fblogin";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/service" component={Service} exact />
        <Route path="/pg" component={Pg} exact />
        <Route path="/mess" component={Mess} exact />
        <Route path="/stationary" component={Stationary} exact />
        <Route path="/baby" component={Baby} exact />
        <Route path="/park" component={Park} exact />
        <Route path="/flats" component={Flats} exact />
        <Route path="/medical" component={Medical} exact />
        <Route path="/laundary" component={Laundary} exact />
        <Route path="/library" component={Library} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/logingoogle" component={LoginGoogle} exact />
        <Route path="/fblogin" component={Fblogin} exact />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
