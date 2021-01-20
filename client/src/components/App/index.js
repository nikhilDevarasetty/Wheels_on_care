import React from "react";
import styles from "./style.module.css";
import { Switch, Route, Link } from "react-router-dom";
import logo from "../../assets/logo3.PNG";
import phone from "../../assets/phone1.PNG";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Services from "../Services";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.navbar}>
        <div className={styles.logodiv}>
          <img src={logo} className={styles.logo} alt="logo" />
          <img src={phone} className={styles.phone} alt="phonenumber" />
        </div>
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
      </div>
      <div className={styles.mainbody}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
