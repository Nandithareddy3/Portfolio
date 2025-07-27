import styles from "./Experience.module.css";

function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <h2 className={styles.heading}>Experience</h2>

      <div className={styles.entry}>
        <h3 className={styles.role}>Internship at DLRL DRDO</h3>
        <p className={styles.detail}>Focus: CNN and Transfer Learning</p>
      </div>

      <div className={styles.entry}>
        <h3 className={styles.role}>Internship at Viswam AI</h3>
        <p className={styles.detail}>Current Role: Exploring advanced AI concepts</p>
      </div>

      {/* Optional future placeholder */}
      <div className={styles.entry}>
        <h3 className={styles.role}>More coming soon...</h3>
        <p className={styles.detail}>Academic projects and future opportunities will appear here.</p>
      </div>
    </section>
  );
}

export default Experience;
