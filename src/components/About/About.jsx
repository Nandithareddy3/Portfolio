import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.bio}>
        I am currently pursuing my undergraduate degree at
        Matusri Engineering College. With a passion for coding
        and AI, I am continuously exploring ways to blend
        software engineering and machine learning to build
        impactful applications.
      </p>
    </section>
  );
}

export default About;
