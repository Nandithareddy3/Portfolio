import styles from "./Education.module.css";

function Education() {
  return (
    <section className={styles.education} id="education">
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.item}>
        <p className={styles.subheading}>Undergraduate</p>
        <p className={styles.school}>Matrusri Engineering College</p>
      </div>
    </section>
  );
}

export default Education;
