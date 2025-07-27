import styles from "./Hero.module.css";

function Hero({ setActivePage }) {
  return (
    <section className={styles.hero}>
      <img
        src="/profile.jpg"
        alt="Nanditha Daram"
        className={styles.profileImage}
      />
      <h1 className={styles.name}>Nanditha Daram</h1>
      <h2 className={styles.title}>Aspiring Software Developer | AI Explorer</h2>
      <p className={styles.intro}>
        I’m an aspiring software developer and an AI enthusiast currently exploring innovative technologies to build intelligent solutions.
      </p>
      <div className={styles.buttons}>
        <button
          onClick={() => setActivePage("projects")}
          className={styles.btnPrimary}
        >
          View Projects
        </button>
        <button
          onClick={() => setActivePage("contact")}
          className={styles.btnSecondary}
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}

export default Hero;
