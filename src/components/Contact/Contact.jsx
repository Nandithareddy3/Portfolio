import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact Me</h2>

      <div className={styles.row}>
        <div className={styles.card}>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:nanditha.daram3@gmail.com" className={styles.link}>
            nanditha.daram3@gmail.com
          </a>
        </div>

        <div className={styles.card}>
          <FaPhone className={styles.icon} />
          <a href="tel:8008022322" className={styles.link}>
            8008022322
          </a>
        </div>

        <div className={styles.card}>
          <FaGithub className={styles.icon} />
          <a
            href="https://github.com/Nandithareddy3"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </div>

        <div className={styles.card}>
          <FaLinkedin className={styles.icon} />
          <a
            href="https://linkedin.com/in/nanditha-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>
      </div>

      <a
        href="/Nanditha_Daram_Resume.pdf"
        download
        className={styles.resumeButton}
      >
        <FaDownload style={{ marginRight: "8px" }} />
        Download Resume
      </a>
    </div>
  );
}

export default Contact;
