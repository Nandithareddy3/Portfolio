import styles from "./Services.module.css";

function Services() {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.heading}>What I Do</h2>

      <div className={styles.card}>
        <h3 className={styles.title}>Software Engineering</h3>
        <p className={styles.description}>
          I develop scalable web applications and explore AI-based solutions for real-world challenges.
        </p>
      </div>
    </section>
  );
}

export default Services;
