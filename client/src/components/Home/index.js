import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./style.module.css";

import About from "../About";
import Contact from "../Contact";
import Services from "../Services";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.navBar}>
        <Router>
          <Link to="/contact" className={styles.route}>
            Contact
          </Link>
          <Link to="/services" className={styles.route}>
            Services
          </Link>
          <Link to="/about" className={styles.route}>
            About
          </Link>
          <Link to="/" className={styles.route}>
            Home
          </Link>

          <Switch>
            <Route path="/" />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
      <div className={styles.nameBlock}>
        <div className={styles.name}>Wheels on Care</div>
        <div className={styles.caption}>
          Wheels on care is commited to providing each customer with exceptional
          service
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>Services</button>
          <button className={styles.button}>call us</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
