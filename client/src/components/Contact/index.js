import React from "react";
import styles from "./style.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.heading}>Get A Quote</div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className={styles.inputs}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className={styles.inputs}
      />
      <input
        type="text"
        name="phonenumber"
        placeholder="Phone"
        className={styles.inputs}
      />
      <textarea type="text" placeholder="Message" className={styles.text} />
      <button className={styles.button}>Send Message</button>
    </div>
  );
};

export default Contact;
