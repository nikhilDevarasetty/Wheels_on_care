import React from "react";
import styles from "./style.module.css";
import image from "../../assets/about.png";

const About = () => {
  return (
    <div className={styles.mainbody}>
      <img src={image} alt="about_image" className={styles.image} />
      <div className={styles.about}>
        <span className={styles.block1}>ABOUT US</span>
        <span className={styles.block2}>WHEELS ON CARE</span>
        <div className={styles.block3}>
          Wheels On Care Company is committed to providing each customer with
          exceptional customer service.
        </div>
        <div className={styles.block4}>
          Don't worry when <b>WHEELS ON CARE</b> with you, providing 24/7
          services. We strive to provide quality assured services including
          mechanic, spare parts, petrol or deisel and towing. We provide
          affordable services, as we know being used when there is a untimely
          situation. Here we have expertised mechanics who are give a provided
          service within time, and assist you overall process. We have services
          charges according to the location perfernces, and don't worry which
          are affordable.
        </div>
      </div>
    </div>
  );
};

export default About;
