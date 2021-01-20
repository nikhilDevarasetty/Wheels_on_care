import React from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";

const SingIn = () => {
  const history = useHistory();
  const signup = () => {
    history.push("/signup");
  };

  return (
    <div className={styles.main}>
      <div className={styles.loginForm}>
        <div className={styles.heading}>Login</div>
        <div className={styles.inputs}>
          <input type="text" placeholder="username" className={styles.input} />
          <input
            type="password"
            placeholder="password"
            className={styles.input}
          />
        </div>
        <button className={styles.button}>singin</button>
        <div className={styles.footer}>
          <span className={styles.forgot}>Forgot password?</span>
          <button className={styles.signup_btn} onClick={signup}>
            Singup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
