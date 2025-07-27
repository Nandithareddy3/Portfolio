import { useState } from "react";
import styles from "./Header.module.css";

const Header = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => handleNavClick("hero")}>
        Home
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        {["about", "education", "experience", "skills", "projects", "contact"].map((page) => (
          <button
            key={page}
            onClick={() => handleNavClick(page)}
            className={`${styles.navButton} ${activePage === page ? styles.active : ""}`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </nav>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
      </div>
    </header>
  );
};

export default Header;
