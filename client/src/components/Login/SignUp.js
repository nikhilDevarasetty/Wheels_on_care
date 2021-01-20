import React from "react";
import styles from "./style.module.css";

const SingUp = () => {
  return (
    <div className={styles.main}>
      <div className={styles.loginForm}>
        <div className={styles.heading}>SignUp</div>
        <div className={styles.inputs}>
          <input type="text" placeholder="username" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />

          <input
            type="password"
            placeholder="password"
            className={styles.input}
          />
        </div>
        <button className={styles.button}>singup</button>
      </div>
    </div>
  );
};

export default SingUp;
