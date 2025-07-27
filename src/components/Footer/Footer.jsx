import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Nanditha Daram. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
