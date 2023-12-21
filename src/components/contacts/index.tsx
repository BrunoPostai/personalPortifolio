import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <div className={styles.divWrapper}>
      <div className={styles.rightWrap}>
        <div className={styles.imageBox}>
        </div>
        <div className={styles.socialMedia}>
         <a className={styles.link} href="https://www.instagram.com/bpostai/" target="_blank"><Icon icon="ri:instagram-fill" color="#3a86df" /></a>
          <a className={styles.link} href="https://www.facebook.com/brunogabriel.postaicardoso" target="_blank"><Icon icon="ic:baseline-facebook" color="#3a86df" /></a>
          <a className={styles.link} href="https://www.linkedin.com/in/bruno-postai/" target="_blank"><Icon icon="mdi:linkedin" color="#3a86df" /></a>
          <a className={styles.link} href="https://drive.google.com/file/d/1YHYOL3up1XtqQaj2iG70QzEa5owgp2RH/view?usp=sharing" target="_blank"><Icon icon="mingcute:pdf-fill" color="#3a86df"/></a>
        </div>
      </div>
      <div className={styles.leftWrap}>
        <h2 className={styles.contactTitle}>CONTACT ME</h2>
        <p className={styles.contactText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          provident. Quos eius expedita autem obcaecati, ipsam dignissimos hic
          quibusdam nihil ut ea, consequatur architecto! Facilis nam possimus
          unde optio veritatis.
        </p>
      </div>
    </div>
  );
}

export default Contact;
