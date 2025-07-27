import styles from "./Projects.module.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.title}>NewsSnap – Live RSS News Feed</h3>
          <p className={styles.description}>
            Developed a responsive web app using HTML, CSS, and JavaScript to display real-time news via News API. Includes keyword search and category filters with clean UX.
          </p>
          <a
            href="https://github.com/Nandithareddy3/news-snap"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaGithub style={{ marginRight: "8px" }} />
            View Project on GitHub
          </a>
        </div>

        {/* Placeholder for future projects */}
        <div className={styles.card}>
          <h3 className={styles.title}>More Projects Coming Soon</h3>
          <p className={styles.description}>
            check my github profile in the contact section thank you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
