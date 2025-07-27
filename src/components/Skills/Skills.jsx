import styles from "./Skills.module.css";

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.heading}>Skills</h2>

      <div className={styles.grid}>
        <div className={styles.category}>
          <h3>Programming</h3>
          <ul>
            <li>C</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Database</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Tools</h3>
          <ul>
            <li>VS Code</li>
            <li>Git</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Concepts</h3>
          <ul>
            <li>Operating Systems</li>
            <li>DBMS</li>
            <li>OOPs</li>
            <li>CNN</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
