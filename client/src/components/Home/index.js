import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.module.css";

const Home = () => {
  const history = useHistory();
  return (
    <div className={styles.home}>
      <div className={styles.nameBlock}>
        <div className={styles.name}>Wheels on Care</div>
        <div className={styles.caption}>
          Wheels on care is commited to providing each customer with exceptional
          service
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => history.push("/services")}
          >
            Services
          </button>
          <button className={styles.button}>call us</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
